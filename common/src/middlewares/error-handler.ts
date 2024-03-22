import * as e from "express";
import { StatusCodes } from "http-status-codes";
import { CustomError } from "../errors/custom-error";

/**
 * Error handler middleware
 * @param err Error
 * @param req Request
 * @param res Response
 * @param next NextFunction
 */
export const errorHandler = (
  err: Error,
  req: e.Request,
  res: e.Response,
  next: e.NextFunction,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(StatusCodes.BAD_REQUEST).send({
    errors: [{ message: err.message }],
  });
};
