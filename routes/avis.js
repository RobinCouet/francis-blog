// Importation des modules nécessaires
import express from "express"; // Importe le module Express pour la création du serveur HTTP
import { verifieToken } from "../auth.js"; // Importe la fonction qui vérifie le token d'authentification du requête
import { create } from "../controllers/avis.controller.js"; // Importe la fonction create qui permet de faire l'ajout d'avis

// Création d'un nouveau router Express
const router = express.Router();

// Route POST pour la création d'un nouvel Avis
router.post('/:articleId', verifieToken, create)

// Exporte le router pour pouvoir l'utiliser dans d'autres modules
export default router;