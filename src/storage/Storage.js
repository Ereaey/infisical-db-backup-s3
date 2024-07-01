
export class Storage {
    constructor() {
        if (this.constructor === Storage) {
            throw new TypeError('Abstract class "Storage" cannot be instantiated directly');
        }
    }

    async save(name, filePath){
        throw new Error('Function not implemented');
    }
}