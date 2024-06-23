

function checkEnvVars(requiredEnvVars) {
    requiredEnvVars.forEach(varName => {
        if (!process.env[varName]) {
            console.error(`Error: ${varName} is not set. Please define it in your .env file.`);
            process.exit(1);
        }
    });
}