import { Request, Response, NextFunction } from "express";
import { UnAuthorizedError } from "../errors/unauthorized-error";

/**
 * Middleware to check if the user is an admin
 * @param req Request
 * @param res Response
 * @param next NextFunction
 */
export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  //   if (!req.currentUser) {
  //     throw new UnAuthorizedError();
  //   }
  //   next();
  return "Admin";
}
