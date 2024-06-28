import {NotificationManager} from "./notification/NotificationManager.js";
import {DbManager} from "./db/DbManager.js";


export function executeAction(action) {
    if (action.type === "dump") {
        let notifications = new NotificationManager(action.notifications);
        try {
            notifications.sendMessage("Dump is started");
            const db = new DbManager(action.name, action.source);
            db.dump()
            notifications.sendMessage("Dump is finished");
        } catch (e) {
            notifications.sendError("Dump is in error");
        }
    } else if (action.type === "restore") {

    } else {
        throw new Error(`Action not exist ${action.type}`);
    }
}