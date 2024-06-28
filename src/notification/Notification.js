

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

    sendMessage(message) {
        if (this.level === NotificationLevel.Info) {
            this.sendInternalMessage(message);
        }
    }

    sendError(message) {
        this.sendInternalError(message);
    }


    sendInternalMessage(message) {
        throw new Error('Function not implemented');
    }

    // Return
    sendInternalError(message) {
        throw new Error('Function not implemented');
    }
}

export {Notification, NotificationLevel};