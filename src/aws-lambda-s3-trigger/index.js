import { getSingleObjectInS3 } from "./s3Operations.js";

export const handler = async (event) => {
  console.log("S3 Event", event);
  const bucketName = event.Records[0].s3.bucket.name;
  const bucketKey = event.Records[0].s3.object.key;

  console.log("BucketName", bucketName);
  console.log("BucketKey", bucketKey);

  await getSingleObjectInS3(bucketName, bucketKey);
};
