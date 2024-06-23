import { Config } from './Config.js';
import fs from 'fs';
import path from 'path';

export class JsonConfig extends Config {
    constructor(filePath) {
        super();
        this.filePath = filePath;
        this.data = this.readJsonFile(filePath);
    }

    readJsonFile(filePath) {
        try {
            const absolutePath = path.resolve(filePath);
            const fileContent = fs.readFileSync(absolutePath, 'utf-8');
            return JSON.parse(fileContent);
        } catch (error) {
            throw new Error(`Error reading JSON file: ${error.message}`);
        }
    }

    isValid() {
        return true;
    }

    getDatabaseList() {
        return Object.keys(this.data.databases);
    }

    getDatabase(name) {
        return this.data.databases[name] || null;
    }

    getTransfer() {
        return this.data.transfer || null;
    }

    getNotification() {
        return this.data.notification || null;
    }
}