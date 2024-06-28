import { Db } from './Db.js';
import {exec} from "child_process";

export class MongoDb extends Db {
    constructor(name, configuration) {
        super(name, configuration);
    }

    async dump() {
        const dumpCommand = `mongodump --uri=${this.configuration.uri} --archive=${this.name} --gzip`;

        return new Promise((resolve, reject) => {
            const process = exec(dumpCommand, (error, stdout, stderr) => {
                if (error) {
                    reject(new Error(`Dump process exited with error: ${error.message}`));
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                }
                resolve(stdout);
            });

            process.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });

            process.stderr.on('data', (data) => {
                console.error(`stderr: ${data}`);
            });
        });
    }
}