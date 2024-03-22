import { Request, Response } from "express";
import { BadRequestError, asyncWrapper } from "@casbytes/common";
import { prisma } from "../libs/prisma";
import { Scrypt } from "../services/scrypt";

export const updateProfile = asyncWrapper(
  async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;

    const passwordHash = await Scrypt.toHash(password);

    const items = { firstName, lastName, passwordHash };

    const updatedUser = await prisma.user.update({
      where: {
        email,
      },
      data: {
        ...items,
      },
    });

    if (!updatedUser) {
      throw new BadRequestError("Invalid credentials.");
    }
    res.send({ success: true });
  },
);
