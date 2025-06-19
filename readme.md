# IMCTrack – Site Web

Ce projet vise à créer une application complète de suivi calorique permettant :

- de suivre les calories consommées via l’alimentation,
- de calculer les calories brûlées via l’activité physique.

Il s’agit d’une architecture microservices, orientée DevOps, conteneurisée avec Docker, et conçue pour être modulable, extensible et maintenable.

## Fonctionnalités
- Redirige les requêtes vers des endpoints fictifs (`/api/user`)
- Conteneurisé avec Docker

##  Démarrage

### 1. Prérequis
- Node.js
- Docker & Docker Compose

### 2. Cloner le projet
```bash
git clone https://github.com/AnissaPRO/IMCTrack.git
cd IMCTrack 

### 4. Initialisation du projet
npm run init


### 5. Lancement du projet
npm run script

### 6. Architecture

![Architecture du projet](Architecture.jpg)



### 7. Explication choix technique 

L'architecture présenté ci dessus me permets de faire communiquer les services entre eux. J'ai besoin que mon utilisateur accède au service Food Track pour calculer ses calories, mais si il s'agit d'un utilisateur avec un accès gratuit alors il ne devra pas avoir accès au service sport track qui lui permets de calculer les calories éliminées dans la journée. En revanche si j'ai un utilisateur premium l'accès lui est permis. Afin d'éviter de surcharger inutilement une seule base de donnée, ce système m'accorde la liberté d'avoir trois base de donnée distincte par service. J'ai également l'avantage que si un service ne répond pas le reste du site n'est pas paralysé et continue de tourner et répondre aux requêtes des utilisateurs.