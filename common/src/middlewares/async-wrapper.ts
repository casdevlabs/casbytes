import { Request, Response, NextFunction } from "express";

/**
 * An async wrapper for express route handlers
 * @param fn function
 * @returns HOF
 */
export const asyncWrapper = (fn: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
