// Importation des modules nécessaires
import express from "express"; // Importe le module Express pour la création du serveur HTTP
import Avis from './avis.model.js'; // Importe le modèle Avis pour interagir avec la base de données
import Article from './article.model.js'; // Importe le modèle Article pour interagir avec la base de données
import { verifieToken } from "./auth.js"; // Importe la fonction qui vérifie le token d'authentification du requête

// Création d'un nouveau router Express
const router = express.Router();

// Route POST pour la création d'un nouvel Avis
router.post('/:articleId', verifieToken, async (req, res ) => {
  try{
    // Création d'un nouvel avis avec les données du corps de la requête et l'ID de l'utilisateur
    const avis = await Avis.create({...req.body, user: req.user.id})
    // Mise à jour de l'article avec l'ID du nouvel avis
    const article = await Article.findByIdAndUpdate(req.params.articleId, { $push: { avis: avis._id }}, { new: true})
    // Envoie une réponse avec le statut 201 (créé) et un message de réussite
    res.status(201).json("Avis add !")
  }catch(error){
    // En cas d'erreur, renvoie une réponse avec le statut 500 (erreur interne du serveur) et le message d'erreur
    res.status(500).json({error: "Erreur lors de la création de l'avis!"})
  }
})

// Exporte le router pour pouvoir l'utiliser dans d'autres modules
export default router;

