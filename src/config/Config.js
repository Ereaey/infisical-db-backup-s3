export class Config {

    constructor() {
        if (this.constructor === Config) {
            throw new TypeError('Abstract class "Config" cannot be instantiated directly');
        }
    }

    isValid() {
        return false;
    }

    // Return list of database name
    getDatabaseList() {
        throw new Error('Function not implemented');
    }

    // Return
    getDatabase(name) {
        throw new Error('Function not implemented');
    }

    //Return transfer information s3, ...
    getTransfer() {
        throw new Error('Function not implemented');
    }

    // Return notification information
    getNotification() {
        throw new Error('Function not implemented');
    }
}