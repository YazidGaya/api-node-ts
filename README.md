# API Node.js avec TypeScript, Gestion des utilisateurs

#  Auteur : 
Prénom : Yazid,
Nom : GAYA

Projet réalisé dans le cadre du TP : Création d’API avec Node.js (Module : Développement web avancé).

# Description

Ce projet est une API REST développée avec Node.js, Express et TypeScript.  
Elle permet de gérer des utilisateurs avec un CRUD complet :

- `POST /users` : ajouter un utilisateur
- `GET /users` : récupérer tous les utilisateurs
- `GET /users/:id` : récupérer un utilisateur par son identifiant
- `PUT /users/:id` : mettre à jour un utilisateur
- `DELETE /users/:id` : supprimer un utilisateur

Les données sont stockées dans une base *MongoDB* via *Mongoose*.


# Structure du projet

api-node-ts/
├── node_modules/
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── controllers/
│   │   └── user.controller.ts
│   ├── models/
│   │   └── user.model.ts
│   ├── routes/
│   │   └── user.routes.ts
│   └── index.ts
├── .env
├── nodemon.json
├── package.json
├── tsconfig.json
└── README.md

# Guide d'installation : (faut avoir Node.js installé, MongoDB en local accessible sur mongodb)
Clonne du dépot : git clone https://github.com/<ton-compte>/api-node-ts.git
cd api-node-ts
npm install

# Configuration : faut crée un fichier .env à la racine; PORT=4000
Pour adapter l'URL si besoin pour se connecter à MongoDB faut accéder à "src/config/db.ts" : await mongoose.connect("mongodb://127.0.0.1:27017/api-node-ts"); et changer l'URL

# Lancer son l'API (Développement avec Nodemon):
npm run dev // le serveur démarre sur :http://localhost:4000

# Routes disponibles : 

1. GET /users
Récupèrer la liste de tous les utilisateurs avec : curl http://localhost:4000/users

2. POST /users
Ajouter un nouvel utilisateur :
 curl -X POST http://localhost:4000/users \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Yazid\",\"email\":\"yazid@uphf.com\"}" 

3. GET /users/:id
Récupère un utilisateur par son identifiant MongoDB avec la commande : curl http://localhost:4000/users/<ID>

4. PUT /users/:id
Met à jour un utilisateur avec la commande : curl -X PUT http://localhost:4000/users/<ID> \ -H "Content-Type: application/json" \ -d "{\"name\":\"Alice modifiée\"}"

5. DELETE /users/:id
Supprime un utilisateur avec la commande : curl -X DELETE http://localhost:4000/users/<ID>

# Tests : 
Les routes ont été testées avec curl en ligne de commande.
Des captures d’écran et des réponses sont mises dans le rapport PDF Yazid-GAYA.pdf

# Technologies utilisées : Node.js, ExpressTypeScript, Mongoose/MongoDB, Nodemon, Dotenv


