import mongoose from "mongoose";

// Schéma de l'utilisateur

const userSchema = new mongoose.Schema({
  name:
   { type: String, required: true },// Nom obligatoire
  email:
   { type: String, required: true }// Email obligatoire
});

// Création du modèle user 
export default mongoose.model("User", userSchema);
