import {executeAction} from "./ActionManager.js";
import {ConfigManager} from "./config/ConfigManager.js";
import {Config} from "./config/Config.js";

async function main() {
    const configManager = new ConfigManager();
    const config = await configManager.getConfig();
    for (const actionName of config.getActionsList()) {
        console.log("Start action :", actionName);
        try {
            await executeAction(config.getAction(actionName));
            console.log("End action :", actionName);
        } catch (e) {
            console.error("End action :", actionName, e);
        }
    }
}

main().catch(err => console.error(`Error: ${err}`));