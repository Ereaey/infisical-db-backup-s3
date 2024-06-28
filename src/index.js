import {executeAction} from "./ActionManager.js";


const action = {
    "name": "dqsd",
    "type": "dump",
    "source": {
      "mysql": {
          "user": "ok"
      }
    },
    "notifications": {
        "console": {
            "level": "info"
        },
        "slack": {
            "level": "info"
        }
    }
}

async function main() {
    executeAction(action);
}

main().catch(err => console.error(`Error: ${err}`));