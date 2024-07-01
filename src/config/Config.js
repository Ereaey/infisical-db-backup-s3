export class Config {

    constructor() {
        if (this.constructor === Config) {
            throw new TypeError('Abstract class "Config" cannot be instantiated directly');
        }
    }

    isValid() {
        return false;
    }

    getActionsList() {
        throw new Error('Function not implemented');
    }

    getAction(name) {
        throw new Error('Function not implemented');
    }
}