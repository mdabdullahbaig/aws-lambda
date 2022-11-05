import { createUserProfile } from "./service.js";
import requestValidation from "./validation.js";

class RequestHandler {
  // private field
  #body;
  constructor(body) {
    this.#body = body;
  }

  // static method
  static create(body) {
    try {
      return new RequestHandler(body);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  // normal method
  async execute() {
    try {
      await requestValidation(this.#body);
      const response = await createUserProfile(this.#body);
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default RequestHandler;
