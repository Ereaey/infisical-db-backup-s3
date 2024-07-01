import {Db} from './Db.js';
import {exec} from "child_process";

export class MysqlDb extends Db {
    constructor(name, configuration) {
        super(name, configuration);
    }

    async dump() {
        const dumpCommand = `mysqldump -u ${this.configuration.user} -p${this.configuration.password} -h ${this.configuration.host} ${this.configuration.database} > ${this.name}`;

        return new Promise((resolve, reject) => {
            const process = exec(dumpCommand);

            process.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });

            process.stderr.on('data', (data) => {
                console.error(`stderr: ${data}`);
            });

            process.on('close', (code) => {
                if (code === 0) {
                    console.log('MySQL dump created successfully.');
                    resolve();
                } else {
                    reject(new Error(`Dump process exited with code ${code}`));
                }
            });

            process.on('error', (err) => {
                reject(new Error(`Error executing dump command: ${err.message}`));
            });
        });
    }
}