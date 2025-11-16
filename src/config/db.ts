import mongoose from "mongoose";

// Fonction pour se connecter à l'application MongoDB
export const connectDB = async () => {
  try {
    // Connexion à la base MongoDB locale
    await mongoose.connect("mongodb://127.0.0.1:27017/api-node-ts");
    // Si la connexion réussit
    console.log("🚀 Connecté à MongoDB");
  } catch (error) {
    // Si la connexion échoue
    console.error("❌ Erreur de connexion MongoDB :", error);
    // Arret de l'application
    process.exit(1);
  }
};
