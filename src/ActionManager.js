import {NotificationManager} from "./notification/NotificationManager.js";
import {DbManager} from "./db/DbManager.js";
import {StorageManager} from "./storage/StorageManager.js";


export async function executeAction(action) {
    if (action.type === "dump") {
        let notifications = new NotificationManager(action.notifications);
        try {
            await notifications.sendMessage("Dump is started");
            const db = new DbManager(action.name, action.source);
            await db.dump()
            await notifications.sendMessage("Dump is finished");
            const storage = new StorageManager(action.storages);
            await storage.save(action.name, action.name);
            await notifications.sendMessage("Store is finished");
        } catch (e) {
            await notifications.sendError("Dump is in error");
        }
    } else if (action.type === "restore") {

    } else {
        throw new Error(`Action not exist ${action.type}`);
    }
}