const { StatusCodes } = require("http-status-codes");
const { CustomError } = require("./custom-error.js");

class BadRequestError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = { BadRequestError };
