import { Request, Response } from "express";
import { asyncWrapper } from "@casbytes/common";

export const signout = asyncWrapper(async (req: Request, res: Response) => {
  req.session = null;
  res.redirect("/");
});
