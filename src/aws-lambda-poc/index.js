import RequestHandler from "./RequestHandler.js";
import ResponseHandler from "./ResponseHandler.js";
import { api_headers, api_response } from "./utils/commonUtils.js";
import { API_METHOD } from "./utils/constants.js";

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const response = await app(event);
    return api_response(200, api_headers(API_METHOD.GET), response);
  } catch (err) {
    const statusCode = err.statusCode;
    const response = JSON.stringify({
      message: err.message,
    });
    return api_response(statusCode, api_headers(API_METHOD.GET), response);
  }
};

const app = async (event) => {
  const requestHandler = RequestHandler.create(event?.queryStringParameters);
  const requestHandlerResponse = await requestHandler.execute();
  const responseHandler = ResponseHandler.create(requestHandlerResponse);
  const responseHandlerResponse = responseHandler.translator();
  return responseHandlerResponse;
};
