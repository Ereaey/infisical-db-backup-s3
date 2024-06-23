export class Db {

    constructor(name, source) {
        if (this.constructor === Db) {
            throw new TypeError('Abstract class "Db" cannot be instantiated directly');
        }
        this.source = source;
        this.name = name;
    }

    dump() {
        throw new Error('Function not implemented');
    }
}