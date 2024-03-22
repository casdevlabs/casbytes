import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "@casbytes/common";
import { prisma } from "../../libs/prisma";

export const getLessons = asyncWrapper(async (req: Request, res: Response) => {
  const { moduleId } = req.params;

  const lessons = await prisma.lesson.findMany({
    where: {
      moduleId,
    },
  });
  res.status(StatusCodes.OK).json(lessons);
});
