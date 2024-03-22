import { Request, Response } from "express";
import {
  BadRequestError,
  asyncWrapper,
  JWT,
  EXCHANGES,
  QUEUES,
} from "@casbytes/common";
import { prisma } from "../libs/prisma";
import { amqp } from "../services/rabbitmq";

export const verifyEmail = asyncWrapper(async (req: Request, res: Response) => {
  const { token: userToken } = req.query as { token: string };

  const user = JWT.verify(userToken) as { email: string };

  const existingUser = await prisma.user.findFirst({
    where: {
      email: user.email,
    },
  });

  if (!existingUser) {
    throw new BadRequestError("Invalid token");
  }

  const validToken = existingUser?.emailVerificationToken === userToken;

  if (!validToken) {
    throw new BadRequestError("Invalid token");
  }

  const isVerified = await prisma.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      verified: true,
      emailVerificationToken: null,
    },
  });

  if (!isVerified) {
    throw new BadRequestError("Invalid token");
  }

  //sign jwt
  const lifetime = "7d";
  const token = JWT.sign(existingUser, lifetime);
  await amqp.publishExchange(EXCHANGES.auth, QUEUES.welcome, { token });
  req.session = { token };
  res.redirect("/onboarding");
});
