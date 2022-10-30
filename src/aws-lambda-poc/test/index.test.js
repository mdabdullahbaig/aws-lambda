import { expect } from "chai";
import { Headers, StatusCodes } from "../constants.js";
import { handler } from "../index.js";
import { validInput, validOutput } from "./mock.js";

describe("Get Valid Response", () => {
  let response = null;
  let body = null;
  const output = validOutput();

  before(async () => {
    response = await handler(validInput(), context);
    body = JSON.parse(response.body);
  });

  it("All the properties should exist in Response", () => {
    expect(response).to.have.property("headers");
    expect(response).to.have.property("statusCode");
    expect(response).to.have.property("body");
    expect(body).to.have.property("data");
    expect(body).to.have.property("message");
  });

  it("Response should give exact value", () => {
    // check if statusCode = 200
    expect(response.statusCode).to.equal(StatusCodes.OK);

    // check if headers is an object and exact equal
    expect(response.headers).to.be.a("object");
    expect(response.headers).to.deep.equal(Headers);

    // check if body is an object and exact equal
    expect(body).to.be.a("object");
    expect(body.message).to.equal(output.body.message);
    expect(body.data.full_name).to.equal(output.body.data.full_name);
    expect(body.data.age).to.equal(output.body.data.age);
    // expect(body.data).to.deep.equal(output.body.data);
  });
});
