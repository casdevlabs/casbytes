import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "@casbytes/common";
import { prisma } from "../../libs/prisma";

export const getBadges = asyncWrapper(async (req: Request, res: Response) => {
  const { userId, moduleId } = req.query as {
    moduleId: string;
    userId: string;
  };
  const badges = await prisma.badge.findMany({
    where: {
      moduleId,
      userId,
    },
  });

  res.status(StatusCodes.OK).send({ badges });
});
