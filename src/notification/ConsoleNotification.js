import {Notification} from "./Notification.js";

export class ConsoleNotification extends Notification{

    constructor(configuration) {
        super(configuration.level);
    }
    async sendInternalMessage(message) {
        console.log("Notification :", message);
    }

    async sendInternalError(message) {
        console.error("Notification :", message);
    }
}