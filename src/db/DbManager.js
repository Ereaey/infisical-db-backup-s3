import {MysqlDb} from "./MysqlDb.js";
import {MongoDb} from "./MongoDb.js";

class DbManager {
    constructor(name, configuration) {
        if (configuration.mysql) {
            console.log("Create mysql instance")
            this.db = new MysqlDb(name, configuration.mysql);
        } else if (configuration.mongodb) {
            console.log("Create mongodb instance")
            this.db = new MongoDb(name, configuration.mongodb);
        } else {
            throw new Error("Not database configured");
        }
    }

    async dump() {
        console.log("Start dump");
        await this.db.dump();
    }
}

export {DbManager};