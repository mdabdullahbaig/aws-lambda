import { API_METHOD } from "./constants.js";

export const api_headers = (method) => {
  if (method === API_METHOD.GET) {
    return {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
  }

  if (method === API_METHOD.POST) {
    return {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "OPTIONS, POST",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
  }
};

export const api_response = (statusCode, headers, response) => {
  return {
    statusCode,
    headers,
    body: JSON.stringify(response),
  };
};
