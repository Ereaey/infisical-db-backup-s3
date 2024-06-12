import path from "path";
import {exec} from "child_process";
import {uploadToS3Bucket} from "./s3.js";
import {getSecret} from "./secrets.js";

export async function backupMysql(file) {
    const mysqlUser = await getSecret('MYSQL_USER');
    const mysqlPassword = await getSecret('MYSQL_PASSWORD');
    const mysqlHost = await getSecret('MYSQL_HOST');
    const mysqlDatabase = await getSecret('MYSQL_DATABASE');

    const dumpCommand = `mysqldump -u ${mysqlUser} -p${mysqlPassword} -h ${mysqlHost} ${mysqlDatabase} > ${file}`;

    exec(dumpCommand, async (err, stdout, stderr) => {
        if (err) {
            console.error(`Error creating MySQL dump: ${stderr}`);
        } else {
            console.log('MySQL dump created successfully.');
        }
    });
}