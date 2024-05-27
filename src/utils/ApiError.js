class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong !!!",
    errors = [],
    stack = ""
  ) {
    super(message); //override
    (this.statusCode = statusCode), //override
      (this.data = null);
    this.message = message;
    this.success = false;
    this.errors = errors; //override

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
