

const NotificationLevel = {
    Info: "info",
    Error: "error"
}

class Notification {

    constructor(level) {
        if (this.constructor === Notification) {
            throw new TypeError('Abstract class "Notification" cannot be instantiated directly');
        }
        this.level = level;
    }

    async sendMessage(message) {
        if (this.level === NotificationLevel.Info) {
            await this.sendInternalMessage(message);
        }
    }

    async sendError(message) {
        await this.sendInternalError(message);
    }


    async sendInternalMessage(message) {
        throw new Error('Function not implemented');
    }

    // Return
    async sendInternalError(message) {
        throw new Error('Function not implemented');
    }
}

export {Notification, NotificationLevel};