import { InfisicalClient } from "@infisical/sdk";
import dotenv from 'dotenv';

dotenv.config();
import {InfisicalClient} from "@infisical/sdk";

function initInfisical() {
    checkEnvVars();

    infisical = new InfisicalClient({
        siteUrl: process.env.DOMAIN_INFISICAL,
        auth: {
            universalAuth: {
                clientId: process.env.MACHINE_ID,
                clientSecret: process.env.MACHINE_SECRET
            }
        }
    });
}

// Récupérer un secret depuis Infisical
async function getSecret(secret) {
    try {
        const result = await infisical.getSecret({
            projectId: process.env.PROJECT_INFISICAL,
            environment: process.env.ENV_INFISICAL,
            secretName: secret,
        });

        if (!result || !result.secret) {
            console.error(`Error: ${secret} not found in Infisical.`);
            process.exit(1);
        }

        return result.secret;
    } catch (error) {
        console.error(`Error retrieving secret ${secret}:`, error);
        process.exit(1);
    }
}