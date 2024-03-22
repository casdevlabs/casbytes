import { Request, Response } from "express";
import { asyncWrapper } from "@casbytes/common";

export const me = asyncWrapper(async (req: Request, res: Response) => {
  res.send({ user: req.currentUser ?? null });
});
