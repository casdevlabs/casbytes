import { Request, Response, NextFunction } from "express";
import { JWT } from "../utils";
interface IUserPayload {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: IUserPayload;
    }
  }
}

/**
 * Middleware to get the current user from the JWT token
 * @param req Request
 * @param res Response
 * @param next NextFunction
 */
export function currentUser(req: Request, res: Response, next: NextFunction) {
  if (!req.session?.token) {
    return next();
  }
  try {
    const payload = JWT.verify(req.session.token) as IUserPayload;
    req.currentUser = payload;
  } catch (error) {
    console.error("JWT verification failed", error);
  }
  next();
}
