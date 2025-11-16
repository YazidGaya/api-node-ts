import { Router } from 'express';

//// Importation des fonctions contrôleurs
import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
} from '../controllers/user.controller';

// Création du routeur Express
const router = Router();

// GET /users
router.get('/', getUsers);

// GET /users/:id
router.get('/:id', getUserById);

// POST /users
router.post('/', addUser);

// PUT /users/:id
router.put('/:id', updateUser);

// DELETE /users/:id
router.delete('/:id', deleteUser);

// Exportation du routeur dans index.ts
export default router;
