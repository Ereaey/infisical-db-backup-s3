import {JsonConfig} from "./JsonConfig.js";


class ConfigManager {
    constructor() {
        this.config = new JsonConfig("../config.json");
    }

    async getConfig() {
        return this.config;
    }
}

export {ConfigManager};