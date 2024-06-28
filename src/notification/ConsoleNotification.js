import {Notification} from "./Notification.js";

export class ConsoleNotification extends Notification{

    constructor(configuration) {
        super(configuration.level);
    }
    sendInternalMessage(message) {
        console.log("Notification :", message);
    }

    sendInternalError(message) {
        console.error("Notification :", message);
    }
}