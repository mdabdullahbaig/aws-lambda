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

    responseBody.data = this.#response.map((res) => ({
      id: res.id,
      first_name: res.firstName,
      last_name: res.lastName,
      full_name: res.fullName,
      email: res.email,
    }));

    return responseBody;
  }
}

export default ResponseHandler;
