import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import {backupMysql} from "./mysql.js";
import {backupMongodb} from "./mongodb.js";
import {checkSecrets, getSecret, initInfisical} from "./secrets.js";
import {initS3, uploadToS3Bucket} from "./s3.js";

dotenv.config();

const requiredInfisicalMainVars = [
    'DUMP_TYPE',
    'DUMP_NAME',
    'UPLOAD_TO_S3',
];

async function generateFolderAndFile(type) {
    const dumpName = await getSecret('DUMP_NAME');
    const date = new Date().toISOString().split('T')[0];
    const dumpDir = path.join(__dirname, 'dumps');
    if (!fs.existsSync(dumpDir)) {
        fs.mkdirSync(dumpDir);
    }
    let filename;
    if (type === 'mysql') {
        filename = `dump_${dumpName}_${date}.sql`;
    } else if (type === 'mongodb') {
        filename = `dump_${dumpName}_${date}.gz`;
    }
    const pathFile = path.join(dumpDir, filename);
    return {pathFile, filename};
}

async function main() {
    initInfisical();
    await checkSecrets(requiredInfisicalMainVars);

    const dumpType = await getSecret('DUMP_TYPE');
    const uploadToS3 = await getSecret('UPLOAD_TO_S3');

    if (uploadToS3 === 'true') {
        await initS3();
    }

    const {path, filename} = await generateFolderAndFile();

    console.log("Launch dump in file ", path);
    if (dumpType === 'mysql') {
        await backupMysql(path);
    } else if (dumpType === 'mongodb') {
        await backupMongodb(path);
    } else {
        console.error("DUMP_TYPE secret must be set to 'mysql' or 'mongodb'.");
    }

    if (fs.existsSync(path) && uploadToS3 === 'true') {
        uploadToS3Bucket(path, filename);
    }
}

main().catch(err => console.error(`Error: ${err}`));
