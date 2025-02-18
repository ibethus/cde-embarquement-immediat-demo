# Démo Environnements de Développement

Ce dépôt contient une démonstration pour présenter les Conteneurs de Développement (CDE - Container Development Environment).

## APIs

Le projet comprend deux APIs REST :
- Une API de gestion des combinaisons spatiales ([doc/spacesuit-api.yaml](doc/spacesuit-api.yaml))
- Une API météorologique planétaire ([doc/weather-report.yaml](doc/weather-report.yaml))

## Structure du projet

- `back/` : Application backend
- `front/` : Application frontend
- `doc/` : Documentation et spécifications OpenAPI

## Feuille de route

Voir la [roadmap](doc/roadmap.adoc) pour les objectifs et les fonctionnalités prévues, notamment :
- Configuration par environnement
- Authentification
- Connexion base de données
- Pipeline CI/CD