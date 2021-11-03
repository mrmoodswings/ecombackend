//customer error object
class APIError extends Error {
  constructor(message, code, stack) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = code;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, APIError);
    }
  }
}
module.exports = APIError;
