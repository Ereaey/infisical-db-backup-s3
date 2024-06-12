import path from "path";
import {exec} from "child_process";
import {uploadToS3Bucket} from "./s3.js";
import {getSecret} from "./secrets.js";

export async function backupMongodb(file) {
    const mongodbUri = await getSecret('MONGODB_URI');
    const dumpCommand = `mongodump --uri=${mongodbUri} --archive=${file} --gzip`;

    exec(dumpCommand, async (err, stdout, stderr) => {
        if (err) {
            console.error(`Error creating MongoDB dump: ${stderr}`);
        } else {
            console.log('MongoDB dump created successfully.');
        }
    });
}