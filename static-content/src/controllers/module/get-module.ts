import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "@casbytes/common";
import { prisma } from "../../libs/prisma";

export const getModule = asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;

  const module = await prisma.module.findUnique({
    where: {
      id,
    },
  });
  res.status(StatusCodes.OK).json(module);
});
