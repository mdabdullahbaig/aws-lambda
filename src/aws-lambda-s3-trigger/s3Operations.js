import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client();

// Get single objects
export const getSingleObjectInS3 = async (bucketName, bucketKey) => {
  const params = {
    Bucket: bucketName,
    Key: bucketKey,
  };

  try {
    const response = await client.send(new GetObjectCommand(params));
    const utfString = await response.Body.transformToString("utf-8");

    try {
      const jsonResponse = JSON.parse(utfString);
      console.log("Json Response", jsonResponse);
      console.log(
        "Full Name: ",
        jsonResponse.firstName + " " + jsonResponse.lastName
      );
      console.log("Email: ", jsonResponse.email);
      console.log("Age: ", jsonResponse.age);
    } catch (err) {
      console.log("Error", err);
      console.log("Error Message", err.message);
    }
  } catch (err) {
    console.log("S3 File Get Error", err);
    console.log("S3 File Get Error Message", err.message);
  }
};
