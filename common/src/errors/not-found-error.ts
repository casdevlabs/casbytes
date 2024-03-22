import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom-error";

/**
 * NotFoundError class
 */
export class NotFoundError extends CustomError {
  statusCode = StatusCodes.NOT_FOUND;
  constructor() {
    super("Route not found.");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: "Not Found." }];
  }
}

export function notFound() {
  throw new NotFoundError();
}
