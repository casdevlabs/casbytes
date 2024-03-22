import { Request, Response } from "express";
import { BadRequestError, asyncWrapper, JWT } from "@casbytes/common";
import { prisma } from "../libs/prisma";
import { Scrypt } from "../services/scrypt";

export const signin = asyncWrapper(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!existingUser) {
    throw new BadRequestError("Invalid credentials.");
  }

  const correctPassword = Scrypt.compare(existingUser.passwordHash, password);

  if (!correctPassword) {
    throw new BadRequestError("Invalid credentials.");
  }

  //sign jwt
  const lifetime = "7d";
  const token = JWT.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
      firstName: existingUser.firstName,
    },
    lifetime,
  );

  req.session = { token };

  if (!existingUser.completedOnboarding) {
    return res.redirect("/onboarding");
  }

  res.redirect("/dashboard");
});
