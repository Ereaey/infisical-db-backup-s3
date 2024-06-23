# Infisical DB Backup

# Configuration

`{
    "test": {
        "action": "backup",
        "source": {
            "mysql": {
                "uri": "",
                "database": ""
            }
        }
        "transfers": {
            "s3": {
                "bucket": "",
                "path": "",
                "token": ""
            }
        }
        "notifications": {
            "slack": {
                "webhook": "",
                "token": "",
                "level": "info"
            }
        }
    }
}`