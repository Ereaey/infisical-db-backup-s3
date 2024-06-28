export class Db {

    constructor(name, configuration) {
        if (this.constructor === Db) {
            throw new TypeError('Abstract class "Db" cannot be instantiated directly');
        }
        this.configuration = configuration;
        this.name = name;
    }

    async dump() {
        throw new Error('Function not implemented');
    }
}