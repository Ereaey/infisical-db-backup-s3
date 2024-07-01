import {Notification} from "./Notification.js";

export class SlackNotification extends Notification {

    constructor(configuration) {
        super(configuration.level);
    }

    async sendInternalMessage(message) {
        console.log(message);
    }

    async sendInternalError(message) {
        console.error(message);
    }
}