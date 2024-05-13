// Importation des modules nécessaires
import express from "express";
import { verifieToken } from '../auth.js'
import {
  add,
  getAll,
  getById,
  updateById,
  deleteById,
  getByAsc,
  getByDesc,
  getByUser,
  getReview
} from "../controllers/article.controller.js";

// Création d'une nouvelle instance de Router
const router = express.Router();

// Route POST pour créer un nouvel article
// On utilise un middleware pour vérifier le token
router.post('/', verifieToken, add)

// Route GET pour récupérer tous les articles
router.get('/', getAll)

// Route GET pour récupérer un article par son id
router.get('/:id', getById)

// Route PUT pour mettre à jour un article par son id
router.put('/:id', verifieToken, updateById)

// Route DELETE pour supprimer un article par son id
router.delete('/:id', verifieToken, deleteById)

// Route GET pour récupérer tous les articles triés par prix croissant
router.get('/sort/asc', getByAsc)

// Route GET pour récupérer tous les articles triés par prix décroissant
router.get('/sort/desc', getByDesc)

// Route GET pour récupérer tous les articles d'un utilisateur
router.get('/user/articles', verifieToken, getByUser)

// Route GET pour récupérer tous les avis d'un article
router.get('/:id/avis', getReview)

// Exportation du router
export default router;

