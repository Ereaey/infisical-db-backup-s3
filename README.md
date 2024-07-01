# Database Manager

## Introduction

**Database Manager** est un utilitaire puissant et polyvalent conçu pour simplifier et automatiser les tâches de sauvegarde de bases de données, de transfert de données vers des stockages distants et d'envoi de notifications. Que vous ayez besoin de sauvegarder vos bases de données MySQL ou MongoDB, de transférer des fichiers vers Amazon S3, ou de recevoir des notifications via Slack ou Telegram, Database Manager est là pour vous aider.

## Fonctionnalités

- **Sauvegarde MySQL**: Automatisez la sauvegarde de vos bases de données MySQL pour garantir la sécurité et l'intégrité de vos données.
- **Sauvegarde MongoDB**: Effectuez des sauvegardes régulières de vos bases de données MongoDB pour prévenir les pertes de données.
- **Gestion des environnements JSON et Infisical**: Gérez facilement vos environnements de configuration en utilisant des fichiers JSON ou Infisical.
- **Transfert S3**: Transférez vos fichiers sauvegardés vers Amazon S3 pour un stockage sécurisé et accessible.
- **Notifications Slack**: Recevez des notifications instantanées sur Slack pour suivre l'état de vos sauvegardes et transferts.
- **Notifications Telegram**: Soyez alerté via Telegram lorsque des actions spécifiques sont effectuées, avec des options de configuration détaillées.

## Configuration

Le fichier de configuration JSON ci-dessous montre un exemple de configuration pour définir des actions de sauvegarde, de notification et de stockage. Adaptez-le en fonction de vos besoins spécifiques.

```json
{
  "actions": {
    "database-test": {
      "name": "database-test",
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
      },
      "storages": {
        "s3": {
          "keyId": "",
          "accessKey": "",
          "region": "",
          "bucket": ""
        }
      }
    }
  }
}
```

### Explication de la Configuration

- **actions**: Définit les différentes actions que Database Manager peut exécuter.
    - **database-test**: Un exemple d'action de sauvegarde nommée "database-test".
        - **name**: Le nom de l'action.
        - **type**: Le type d'action, ici un "dump" (sauvegarde) de base de données.
        - **source**: Spécifie la source de la sauvegarde.
            - **mysql**: Les informations de connexion MySQL, ici seulement l'utilisateur.
        - **notifications**: Configure les notifications à envoyer après l'exécution de l'action.
            - **console**: Niveau de notification pour la console.
            - **slack**: Niveau de notification pour Slack.
            - **telegram**: Niveau de notification pour Telegram, avec le jeton et l'ID de chat.
        - **storages**: Configure les options de stockage pour les fichiers sauvegardés.
            - **s3**: Les informations de connexion S3, y compris l'ID de la clé, la clé d'accès, la région et le seau (bucket).

## Conclusion

Database Manager est votre solution idéale pour automatiser les sauvegardes de bases de données, le transfert de fichiers vers le cloud et la gestion des notifications. Sa configuration flexible et ses fonctionnalités étendues en font un outil essentiel pour les administrateurs de bases de données et les ingénieurs DevOps. N'hésitez pas à adapter la configuration selon vos besoins et à exploiter pleinement les capacités de cet utilitaire pour garantir la sécurité et la disponibilité de vos données.