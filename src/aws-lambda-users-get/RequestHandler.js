import getAllUsers from "./service.js";
import requestValidation from "./validation.js";

class RequestHandler {
  // private field
  #queryParams;
  constructor(queryParams) {
    this.#queryParams = queryParams;
  }

  // static method
  static create(queryParams) {
    try {
      return new RequestHandler(queryParams);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  // normal method
  async execute() {
    try {
      if (this.#queryParams) {
        await requestValidation(this.#queryParams);
      }

      const response = getAllUsers(this.#queryParams);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default RequestHandler;
