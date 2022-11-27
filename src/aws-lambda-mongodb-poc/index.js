import { mongoConnection } from "./database.js";

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log("Event", event);

  const dbConn = await mongoConnection();

  const users = await dbConn.collection("collectionName").find({}).toArray();

  console.log("Users", users);
};
