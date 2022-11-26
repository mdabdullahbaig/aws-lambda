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
          Resource: event.methodArn,
          // Resource: `arn:aws:execute-api:${process.env.REGION}:${process.env.ACCOUNT_ID}:${process.env.API_ID}/${process.env.STAGE}/*/users/*`,
        },
      ],
    },
  };

  const token = event?.authorizationToken.split(" ")[1];
  console.log("Bearer Token", token);

  if (!token) {
    return response;
  }

  let decodedToken;
  try {
    decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token", decodedToken);
  } catch (err) {
    console.log(err);
    return response;
  }

  response.principalId = decodedToken.id;
  response.policyDocument.Statement[0].Effect = "Allow";
  console.log("Authorizer Response", response);
  return response;
};
