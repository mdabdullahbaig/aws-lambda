import jwt from "jsonwebtoken";

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log("Event Request", event);

  const response = {
    principalId: null, // The principal user identification associated with the token sent by the client.
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: "Deny",
          Resource:
            "arn:aws:execute-api:ap-south-1:208031230103:hhk6eiqjxk/development/*/users/*",
        },
      ],
    },
  };

  const token = event?.headers?.authorization.split(" ")[1];
  console.log("Bearer Token", token);

  if (!token) {
    // throw new CustomError(
    //   "Authentication failed, Bearer token is not present",
    //   401
    // );
    return response;
  }

  const decodedToken = jwt.verify(token, process.env.secret);
  console.log("Decoded Token", decodedToken);

  if (!decodedToken) {
    // throw new CustomError(
    //   "Authentication failed, Bearer token is incorrect",
    //   401
    // );
    return response;
  }

  response.principalId = decodedToken.id;
  response.policyDocument.Statement[0].Effect = "Allow";
  console.log("Authorizer Response", response);
  return response;
};
