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
  "actions": [
    {
      "name": "database_test_backup",
      "type": "backup",
      "db": {
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
    {
      "name": "database_test_backup2",
      "type": "backup",
      "db": {
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
  ]
}
```