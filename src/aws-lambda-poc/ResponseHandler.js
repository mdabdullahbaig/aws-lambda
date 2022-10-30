class ResponseHandler {
  // private field
  #response;
  constructor(response) {
    this.#response = response;
  }
  // static method
  static create(requestHandlerResponse) {
    try {
      return new ResponseHandler(requestHandlerResponse);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  translator() {
    const responseBody = {
      data: null,
      message: "success",
    };

    responseBody.data = {
      full_name: this.#response.fullName,
      age: this.#response.age,
      id: this.#response.id,
      creator_name: this.#response.creatorName,
    };

    return responseBody;
  }
}

export default ResponseHandler;
