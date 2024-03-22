import { Request, Response } from "express";
import { BadRequestError, asyncWrapper, JWT, QUEUES } from "@casbytes/common";
import { prisma } from "../libs/prisma";
import { Scrypt } from "../services/scrypt";
import { amqp } from "../services/rabbitmq";

export const signup = asyncWrapper(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const existingUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new BadRequestError("Invalid credentials.");
  }

  const passwordHash = await Scrypt.toHash(password);

  const createdUser = await prisma.user.create({
    data: {
      ...req.body,
      passwordHash,
    },
    select: {
      email: true,
      firstName: true,
    },
  });

  if (!createdUser) {
    throw new BadRequestError("Invalid credentials.");
  }

  const lifetime = "1d";
  const token = JWT.sign(createdUser, lifetime);
  // await amqp.rpcRequest(QUEUES.verify_email, { token });
  res.send({ success: true });
});
