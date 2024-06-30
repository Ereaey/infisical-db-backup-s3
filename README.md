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
  "actions": {
    "dqsd": {
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
        },
        "telegram": {
          "level": "info",
          "token": "",
          "id": ""
        }
      }
    }
  }
}
```