import { Db } from './Db.js';
import {exec} from "child_process";

export class MysqlDb extends Db {
    constructor(name, source) {
        super(name, source);
    }

    dump() {
        const dumpCommand = `mysqldump -u ${this.source.user} -p${this.source.password} -h ${this.source.host} ${this.source.database} > ${this.name}`;

        exec(dumpCommand, async (err, stdout, stderr) => {
            if (err) {
                console.error(`Error creating MySQL dump: ${stderr}`);
            } else {
                console.log('MySQL dump created successfully.');
            }
        });
    }
}