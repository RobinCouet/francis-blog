import { Article, User } from '../models/index.js'; // Importe le modèle Avis et Article pour interagir avec la base de données

export const create = async (req, res) => {
    try {
        // Recuperation de l'article afin de pouvoir créer un avis directement depuis l'article
        const article = await Article.findByPk(req.params.articleId);

        // // On crée l'avis depuis l'article récupéré afin de faire la relation entre les 2
        await article.createReview({ ...req.body, UserId: req.user.id });

        // Envoie une réponse avec le statut 201 (créé) et un message de réussite
        res.status(201).json("Avis add !")
    } catch (error) {
        console.log(error)
        // En cas d'erreur, renvoie une réponse avec le statut 500 (erreur interne du serveur) et le message d'erreur
        res.status(500).json({ error: "Erreur lors de la création de l'avis!" })
    }
}