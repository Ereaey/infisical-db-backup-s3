import {Notification} from "./Notification.js";
export class SlackNotification extends Notification {

    constructor(configuration) {
        super(configuration.level);
    }
    sendInternalMessage(message) {
        console.log(message);
    }

    sendInternalError(message) {
       console.error(message);
    }
}