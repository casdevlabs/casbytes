import { Request, Response } from "express";
import { BadRequestError, asyncWrapper } from "@casbytes/common";
import { prisma } from "../libs/prisma";

export const completedOnboarding = asyncWrapper(
  async (req: Request, res: Response) => {
    const { id } = req.body;
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        completedOnboarding: true,
      },
    });

    if (!user) {
      throw new BadRequestError("Invalid credentials.");
    }

    /**
     * TODO: send complete onboarding email to gear them up
     */

    res.send({ completed: true });
  },
);
