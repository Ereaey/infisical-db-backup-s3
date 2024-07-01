import {Notification} from "./Notification.js";
import axios from "axios";
export class TelegramNotification extends Notification {

    constructor(configuration) {
        super(configuration.level);
        this.token = configuration.token;
        this.id = configuration.id;
    }
    async sendInternalMessage(message) {
        const messageHtml = `<b>Backup : </b>${message}`;
        try {
            await axios.get(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.id}&text=${Buffer.from(messageHtml, 'utf-8').toString()}&parse_mode=HTML`, {adapter: "fetch"});
        } catch (e) {
            console.error("Impossible d'envoyer de log à Telegram");
        }
    }

    async sendInternalError(message) {
        const messageHtml = `<b>Backup : </b>${message}`;
        try {
            await axios.get(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.id}&text=${Buffer.from(messageHtml, 'utf-8').toString()}&parse_mode=HTML`, {adapter: "fetch"});
        } catch (e) {
            console.error("Impossible d'envoyer de log à Telegram");
        }
    }
}