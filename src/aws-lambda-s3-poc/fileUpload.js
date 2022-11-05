import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
const client = new S3Client({ region: "ap-south-1" });

const fileUpload = async (base64String) => {
  const decodedFile = Buffer.from(base64String, "base64");

  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: `images/${new Date().toISOString()}.jpeg`,
    Body: decodedFile,
    ContentType: "image/jpeg",
  };

  try {
    const response = await client.send(new PutObjectCommand(params));
    return response;
  } catch (err) {
    console.log("S3 File Upload Error", err);
    throw err;
  }
};

export default fileUpload;
