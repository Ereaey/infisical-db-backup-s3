import AWS from "aws-sdk";
import fs from "fs";
import {Storage} from "./Storage.js";

export class S3Storage extends Storage {
    constructor(configuration) {
        super();
        console.log("S3 Initialization");

        this.bucket = configuration.bucket;

        AWS.config.update({
            accessKeyId: configuration.keyId,
            secretAccessKey: configuration.accessKey,
            region: configuration.region,
        });
    }

    async save(name, filePath) {
        const s3 = new AWS.S3();
        const fileStream = fs.createReadStream(filePath);
        const params = {
            Bucket: this.bucket,
            Key: name,
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
}