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
      first_name: this.#response.firstName,
      last_name: this.#response.lastName,
      email: this.#response.email,
      mobile_number: this.#response.mobileNumber,
      profile_image_url: this.#response.profileImageUrl,
    };

    return responseBody;
  }
}

export default ResponseHandler;
