import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom-error";

/**
 * BadRequestError class
 */
class BadRequestError extends CustomError {
  statusCode = StatusCodes.BAD_REQUEST;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

export { BadRequestError };