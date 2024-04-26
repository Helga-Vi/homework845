const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");

// Configure AWS SDK with credentials from environment variables
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || 'your-default-region' // Replace 'your-default-region' with your actual AWS region
 });
 
const s3 = new AWS.S3()

const save = async (favNumber) => {
  console.log("saving");
  await s3.putObject({
    Body: JSON.stringify(favNumber, null, 2),
    Bucket: "your_bucket_name",
    Key: "number.json",
  }).promise()
};

module.exports = { save };
