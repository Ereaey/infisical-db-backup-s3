import {SlackNotification} from "./SlackNotification.js";
import {ConsoleNotification} from "./ConsoleNotification.js";
import {NotificationLevel} from "./Notification.js";
import {TelegramNotification} from "./TelegramNotification.js";


export class NotificationManager {
    constructor(notifications) {
        this.notifications = [];
        if (notifications.slack) {
            console.log("Create slack notifier")
            this.notifications.push(new SlackNotification(notifications.slack));
        }
        if (notifications.telegram) {
            console.log("Create telegram notifier")
            this.notifications.push(new TelegramNotification(notifications.telegram));
        }
        this.notifications.push(new ConsoleNotification({level: NotificationLevel.Info}));
    }

    async sendMessage(message) {
        for (const notification of this.notifications) {
            await notification.sendMessage(message);
        }
    }

    async sendError(message) {
        for (const notification of this.notifications) {
            await notification.sendError(message);
        }
    }
}