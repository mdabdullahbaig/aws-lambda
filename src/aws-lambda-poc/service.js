import { v4 as uuidv4 } from "uuid";

const getResponse = (queryParams) => {
  return {
    fullName: queryParams?.fullName || "",
    age: queryParams?.age || "",
    id: uuidv4(),
    creatorName: process.env.CREATOR_NAME,
  };
};

export default getResponse;
