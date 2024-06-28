export class Config {

    constructor() {
        if (this.constructor === Config) {
            throw new TypeError('Abstract class "Config" cannot be instantiated directly');
        }
    }

    isValid() {
        return false;
    }

    // Return list of actions
    getActionsList() {
        throw new Error('Function not implemented');
    }

    // Return
    getAction(name) {
        throw new Error('Function not implemented');
    }
}