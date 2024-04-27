const s3 = require('./awsConfig');

const save = async (favNumber) => {
  console.log("saving");
  await s3.putObject({
    Body: JSON.stringify(favNumber, null, 2),
    Bucket: "homework485",
    Key: "number.json",
  }).promise()
};

const list = async () => {
  try {
     const params = {
       Bucket: 'homework485', // Replace with your bucket name
       MaxKeys: 1 // Limit the number of items returned to check the connection
     };
 
     const data = await s3.listObjectsV2(params).promise();
     console.log('Successfully connected to AWS S3. Bucket contents:', data);
  } catch (error) {
     console.error('Failed to connect to AWS S3:', error);
  }
 }
 


module.exports = { save, list };
