import { Request, Response } from "express";
import User from "../models/user.model";

// En utilisant GET /users pour récupérer tous les utilisateurs
export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

// En utilisant GET /users/:id pour Récupérer un utilisateur spécifique
export const getUserById = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  res.json(user);
};

// En utilisant POST /users pour Ajouter un utilisateur
export const addUser = async (req: Request, res: Response) => {
  const { name, email } = req.body; // récupèration des données envoyées

  // Vérification si name et email sont présents
  if (!name || !email) {
    return res.status(400).json({ message: "Nom et email requis" });
  }

  const newUser = await User.create({ name, email });// Ajoute l'utilisateur dans MongoDB
  res.json(newUser);// Renvoie l'utilisateur ajouté
};

// En utilisant PUT /users/:id pour mettre à jour un utilisateur
export const updateUser = async (req: Request, res: Response) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,// Id de l'utilisateur à modifier
    req.body,
    { new: true } // Renvoie de l'utilisateur mis à jour
  );

  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  res.json(user);
};

// En utilisant DELETE /users/:id pour supprimer un utilisateur
export const deleteUser = async (req: Request, res: Response) => {
  const user = await User.findByIdAndDelete(req.params.id); //Supprimer l'utilisateur

  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  res.json({ message: "Utilisateur supprimé" });
};
