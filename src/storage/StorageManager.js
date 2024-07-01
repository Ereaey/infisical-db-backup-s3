import {S3Storage} from "./S3Storage.js";

export class StorageManager  {
    constructor(configuration) {
        this.storages = [];
        if (configuration.s3) {
            console.log("Create s3 storage")
            this.storages.push(new S3Storage(configuration.s3));
        }
    }

    async save(name, filePath) {
        for (const storage of this.storages) {
            await storage.save(name, filePath);
        }
    }
}