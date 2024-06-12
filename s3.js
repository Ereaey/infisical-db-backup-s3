import AWS from "aws-sdk";
import fs from "fs";
import {getSecret} from "./secrets.js";


async function initS3() {
    console.log("S3 Initialization");
    const awsAccessKeyId = await getSecret('AWS_ACCESS_KEY_ID');
    const awsSecretAccessKey = await getSecret('AWS_SECRET_ACCESS_KEY');
    const awsRegion = await getSecret('AWS_REGION');
    const s3BucketName = await getSecret('S3_BUCKET_NAME');

    AWS.config.update({
        accessKeyId: awsAccessKeyId,
        secretAccessKey: awsSecretAccessKey,
        region: awsRegion,
    });
}

function uploadToS3Bucket(filePath, s3Key) {
    const s3 = new AWS.S3();
    const fileStream = fs.createReadStream(filePath);
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: s3Key,
        Body: fileStream,
    };

    s3.upload(params, (err, data) => {
        if (err) {
            console.error(`Error uploading to S3: ${err}`);
        } else {
            console.log(`Successfully uploaded to S3: ${data.Location}`);
        }
    });
}

export {initS3, uploadToS3Bucket};