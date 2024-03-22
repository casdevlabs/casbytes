import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom-error";

/**
 * UnAuthorizedError class
 */
export class UnAuthorizedError extends CustomError {
  statusCode = StatusCodes.UNAUTHORIZED;

  constructor() {
    super("Unauthorized!");

    Object.setPrototypeOf(this, UnAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: "Unauthorized!" }];
  }
}
