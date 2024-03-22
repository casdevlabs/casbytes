import { ValidationError } from "express-validator";
import { StatusCodes } from "http-status-codes";

/**
 * RequestValidationError class
 */
export class RequestValidationError extends Error {
  statusCode = StatusCodes.BAD_REQUEST;
  constructor(public errors: ValidationError[]) {
    super();
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return this.errors.map((error) => {
      if (error.type === "field") {
        return { message: error.msg, field: error.path };
      }
      return { message: error.msg };
    });
  }
}
