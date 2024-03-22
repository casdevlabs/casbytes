import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { NotFoundError, asyncWrapper } from "@casbytes/common";
import { prisma } from "../../libs/prisma";

export const getCourses = asyncWrapper(async (req: Request, res: Response) => {
  const courses = await prisma.course.findMany();
  if (!courses.length) {
    throw new NotFoundError();
  }
  res.status(StatusCodes.OK).json(courses);
});
