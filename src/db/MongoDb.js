import { Db } from './Db.js';
import {exec} from "child_process";

export class MongoDb extends Db {
    constructor(name, source) {
        super(name, source);
    }

    dump() {
        const dumpCommand = `mongodump --uri=${this.source.uri} --archive=${this.name} --gzip`;

        exec(dumpCommand, async (err, stdout, stderr) => {
            if (err) {
                console.error(`Error creating MongoDB dump: ${stderr}`);
            } else {
                console.log('MongoDB dump created successfully.');
            }
        });
    }
}