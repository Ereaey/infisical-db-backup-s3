# Infisical DB Backup

# Features preview

- [ ] Mysql backup
- [ ] Mongodb backup
- [ ] Json env
- [ ] Infisical env
- [ ] S3 transfer
- [ ] Slack notification
- [ ] Telegram notification

# Configuration

```json
{
    "database_test": {
        "action": "backup",
        "source": {
            "mysql": {
                "uri": "",
                "database": ""
            }
        },
        "transfers": {
            "s3": {
                "bucket": "",
                "path": "",
                "token": ""
            }
        },
        "notifications": {
            "slack": {
                "webhook": "",
                "token": "",
                "level": "info"
            }
        }
    },
  "database_test2": {
    "action": "backup",
    "source": {
      "mongodb": {
        "uri": "",
        "database": ""
      }
    },
    "transfers": {
      "ftp": {
        "domain": "",
        "login": "",
        "password": "",
        "path": ""
      }
    },
    "notifications": {
      "telegram": {
        "token": "",
        "level": "info"
      }
    }
  }
}
```