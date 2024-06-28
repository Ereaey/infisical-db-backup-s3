import {SlackNotification} from "./SlackNotification.js";
import {ConsoleNotification} from "./ConsoleNotification.js";
import {NotificationLevel} from "./Notification.js";


export class NotificationManager {
    constructor(notifications) {
        this.notifications = [];
        if (notifications.slack) {
            console.log("Create slack notifier")
            this.notifications.push(new SlackNotification(notifications.slack));
        }
        this.notifications.push(new ConsoleNotification({level: NotificationLevel.Info}));
    }

    sendMessage(message) {
        for (const notification of this.notifications) {
            notification.sendMessage(message);
        }
    }

    sendError(message) {
        for (const notification of this.notifications) {
            notification.sendError(message);
        }
    }
}