// Importation des modules nécessaires
import express from "express";
import Article from './article.model.js';
import { verifieToken }  from './auth.js'

// Création d'une nouvelle instance de Router
const router = express.Router();

// Route POST pour créer un nouvel article
// On utilise un middleware pour vérifier le token
router.post('/', verifieToken,  async (req,res) => {
  try{
    // On crée un nouvel article avec les informations reçues dans le corps de la requête
    const article = await Article.create(req.body)
    // On renvoie le nouvel article avec un statut 201
    res.status(201).json(article)
  }catch(err){
    // En cas d'erreur, on renvoie un statut 500 avec le message d'erreur
    res.status(500).json({ error: "Error lors de la création ! 😭" })
  }
})

// Route GET pour récupérer tous les articles
router.get('/', async (req, res) => {
  try{
    // On récupère tous les articles
    const articles = await Article.find()
    // On renvoie les articles avec un statut 200
    res.status(200).json(articles)
  }catch(err){
    // En cas d'erreur, on renvoie un statut 500 avec le message d'erreur
    res.status(500).json({ error: "Error lors de la récupération"})
  }
})

// Route GET pour récupérer un article par son id
router.get('/:id', async (req, res) => {
  try{
    const id = req.params.id;
    // On récupère l'article par son id
    const article = await Article.findById(id)
    // On renvoie l'article avec un statut 200
    res.status(200).json(article)
  }catch(err){
    // En cas d'erreur, on renvoie un statut 500 avec le message d'erreur
    res.status(500).json({ error: "Error lors de la récupération"})
  }
})

// Route PUT pour mettre à jour un article par son id
router.put('/:id', verifieToken, async (req, res) => {
  try{
    // On récupère l'article par son id
    const getArticle = await Article.findById(req.params.id)
    // On vérifie que l'utilisateur qui fait la requête est bien l'utilisateur qui a créé l'article
    if(getArticle.user.toString() === req.user.id){
      // On met à jour l'article avec les nouvelles informations reçues dans le corps de la requête
      const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true})
      // On renvoie l'article mis à jour avec un statut 200
      return res.status(200).json(article)
    }else{
      // Si l'utilisateur qui fait la requête n'est pas l'utilisateur qui a créé l'article, on renvoie un statut 403
      return res.status(403).json({ error: "Seul le créateur peut modifier !"})
    }
  }catch(err){
    // En cas d'erreur, on renvoie un statut 500 avec le message d'erreur
    res.status(500).json({ error: "Error lors de la récupération"})
  }
})

// Route DELETE pour supprimer un article par son id
router.delete('/:id', verifieToken, async (req, res) => {
  try{
    // On récupère l'article par son id
    const getArticle = await Article.findById(req.params.id)
    // On vérifie que l'utilisateur qui fait la requête est bien l'utilisateur qui a créé l'article
    if(getArticle.user.toString() === req.user.id){
      // On supprime l'article
      const article =  await Article.findByIdAndDelete(req.params.id)
      // On renvoie un message de confirmation avec un statut 200
      res.status(200).json("Article deleted ! ")
    }else{
      // Si l'utilisateur qui fait la requête n'est pas l'utilisateur qui a créé l'article, on renvoie un statut 403
      return res.status(403).json({ error: "Seul le créateur peut supprimer !"})
    }
  }catch(err){
    // En cas d'erreur, on renvoie un statut 500 avec le message d'erreur
    res.status(500).json({ error: "Error lors de la récupération"})
  }
})

// Route GET pour récupérer tous les articles triés par prix croissant
router.get('/sort/asc', async (req, res) => {
  try{
    // On récupère tous les articles triés par prix croissant
    const articles = await Article.find().sort('price')
    // On renvoie les articles avec un statut 200
    res.status(200).json(articles)
  }catch(err){
    // En cas d'erreur, on renvoie un statut 500 avec le message d'erreur
    res.status(500).json({ error: "Erreur lors du tri des articles par price"})
  }
})

// Route GET pour récupérer tous les articles triés par prix décroissant
router.get('/sort/desc', async (req, res) => {
  try{
    // On récupère tous les articles triés par prix décroissant
    const articles = await Article.find().sort('-price')
    // On renvoie les articles avec un statut 200
    res.status(200).json(articles)
  }catch(err){
    // En cas d'erreur, on renvoie un statut 500 avec le message d'erreur
    res.status(500).json({ error: "Erreur lors du tri des articles par price"})
  }
})

// Route GET pour récupérer tous les articles d'un utilisateur
router.get('/user/articles', verifieToken, async (req, res) => {
  try{
    // On récupère tous les articles de l'utilisateur qui fait la requête
    const articles = await Article.find({ user: req.user.id})
    // On renvoie les articles avec un statut 200
    res.status(200).json(articles)
  }catch(err){
    // En cas d'erreur, on renvoie un statut 500 avec le message d'erreur
    res.status(500).json({ error: "Erreur."})
  }
})

// Route GET pour récupérer tous les avis d'un article
router.get('/:id/avis', async (req, res) => {
  try{
    // On récupère tous les avis de l'article par son id
    // "populate" est utilisé pour créer une sorte de jointure entre les collections de données MongoDB
    const article = await Article.findById(req.params.id).populate('avis')
    // On renvoie les avis avec un statut 200
    res.status(200).json(article.avis)
  }catch(error){
    // En cas d'erreur, on renvoie un statut 500 avec le message d'erreur
    res.status(500).json(error.message)
  }
})

// Exportation du router
export default router;

