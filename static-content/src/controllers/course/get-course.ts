import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "@casbytes/common";
import { prisma } from "../../libs/prisma";

export const getCourse = asyncWrapper(async (req: Request, res: Response) => {
  const { courseId } = req.params;

  const course = await prisma.course.findUnique({
    where: {
      id: courseId,
    },
  });

  res.status(StatusCodes.OK).json(course);
});
