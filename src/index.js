import {checkSecrets, getSecret, initInfisical} from "../secrets.js";
import {initS3, uploadToS3Bucket} from "../s3.js";
import {backupMysql} from "../mysql.js";
import {backupMongodb} from "../mongodb.js";
import fs from "fs";


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