import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "@casbytes/common";
import { prisma } from "../../libs/prisma";

export const getModules = asyncWrapper(async (req: Request, res: Response) => {
  const { courseId } = req.params;

  const modules = await prisma.module.findMany({
    where: {
      courseId,
    },
  });
  res.status(StatusCodes.OK).json(modules);
});
