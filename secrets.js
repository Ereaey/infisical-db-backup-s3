import { InfisicalClient } from "@infisical/sdk";
import dotenv from 'dotenv';

dotenv.config();

let infisical;

const requiredEnvVars = [
    'DOMAIN_INFISICAL',
    'PROJECT_INFISICAL',
    'ENV_INFISICAL',
    'MACHINE_ID',
    'MACHINE_SECRET',
];

// Vérifier que toutes les variables d'environnement requises sont définies
function checkEnvVars() {
    requiredEnvVars.forEach(varName => {
        if (!process.env[varName]) {
            console.error(`Error: ${varName} is not set. Please define it in your .env file.`);
            process.exit(1);
        }
    });
}

// Initialiser le client Infisical
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

// Vérifier que tous les secrets nécessaires sont définis dans Infisical
async function checkSecrets(secrets) {
    for (const secret of secrets) {
        await getSecret(secret);
    }
}

export { initInfisical, getSecret, checkSecrets };
