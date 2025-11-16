import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { connectDB } from './config/db';
import userRoutes from './routes/user.routes';

// Chargement des variables d'environnement 
dotenv.config();
connectDB();

const app = express();

// Port du serveur
const PORT = process.env.PORT || 3000;

// lire les données JSON envoyées dans les requêtes
app.use(express.json());

// Lire les données JSON envoyées dans les requêtes
app.get('/', (req: Request, res: Response) => {
  res.send('🚀 API Node.js avec TypeScript fonctionne !');
});

// Toutes les routes "users" seront accessibles via '/users'
app.use('/users', userRoutes);

// Démarrage du serveur HTTP sur le port choisi juste au-dessus
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
