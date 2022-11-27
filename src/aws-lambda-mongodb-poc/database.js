import { MongoClient } from "mongodb";

const MONGODB_URI =
  "mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.cvaeo.mongodb.net/test?retryWrites=true&w=majority";

let cachedDb = null;

export const mongoConnection = async () => {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db("databaseName");
  cachedDb = db;
  return db;
};
