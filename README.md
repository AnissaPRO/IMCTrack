<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">A propos du projet</a>
       <li><a href="#installation">Installation</a></li>
    </li>
    <li>
      <ul>
        <li><a href="#fonctionnalitée">Fonctionnalitée</a></li>
        <li><a href="#Requête-SQL">Requête SQL</a></li>
        <li><a href="#accès-routes">Accès routes</a></li>
        <li><a href="#Démarrage-des-services">Démarrage des services</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Track est une application web permettant aux utilisateurs de suivre leur consommation énergétique quotidienne. Développé avec une architecture en micro services, le back utilise NodeJs avec express et le front est en react avec un design Atoms.

### Installation

1. Cloner le repo
   ```sh
   git clone https://github.com/AnissaPRO/IMCTrack.git
   ```
2. Installer NPM packages
   ```sh
   cd IMCTrack
   npm i
   cd api_gateway-imc
   npm i
   cd ../
   cd user-service
   npm i
   cd ../
   cd food-track
   npm i
   cd ../
   cd frontend
   npm i
   cd ../
   ```
3. Créer votre network pour déployer avec docker
   ```sh
   docker network create mon-network
   ```
4. Renseigner .env sur les services user-service, food-track avec vos propres données

<!-- Fonctionnalitée -->

## Fonctionnalitée

- [x] S'inscrire, se connecter en tant qu'utilisateur
- [x] Page profil : alimenter la table des aliments. Ne pas oublier de lancer le service food-track.
- [x] Page profil : Ajouter les calories de la journée et obtenir le total de ce qui a été consommée.Ne pas oublier de lancer le service food-track.
- [ ] Sauvegarder les calories dans la journée (en cours de développement)

<!-- Requête SQL -->

## Requête SQL

Pour créer la table users :

    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
name VARCHAR(100) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(100) NOT NULL
);

Pour créer la table food :

CREATE TABLE food_items (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
name VARCHAR(100) NOT NULL,
calories_per_100g FLOAT NOT NULL,
protein FLOAT DEFAULT 0,
carbs FLOAT DEFAULT 0,
fat FLOAT DEFAULT 0,
category VARCHAR(50),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Pour avoir quelques aliments :
INSERT INTO food_items (name, calories_per_100g, protein, carbs, fat, category)
VALUES
('Riz blanc cuit', 120, 2.7, 28, 0.3, 'féculent'),
('Pomme', 52, 0.3, 14, 0.2, 'fruit'),
('Blanc de poulet', 110, 23, 0, 1.2, 'viande'),
('Avocat', 160, 2, 9, 15, 'fruit');

<!-- Accès route -->

## Accès routes

- [PgAdmin] http://localhost:8888/ -> nécessite le service user-service, api_gateway-imc de lancé.
- [S'inscrire](http://localhost:3000/register) -> nécessite le service user-service, api_gateway-imc, frontend de lancé.
- [Connexion] (http://localhost:3000/login) -> nécessite le service user-service, api_gateway-imc, frontend de lancé.
- [Profile] (http://localhost:3000/profil)-> nécessite le service user-service, api_gateway-imc, frontend de lancé.

<!-- Démarrage des services -->

## Démarrage des services

- '''sh
  docker-compose up --build
  ''' -> pour les services user-service, api_gateway-imc, food-track.
- '''sh
  npm start
  ''' -> pour le service frontend.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
