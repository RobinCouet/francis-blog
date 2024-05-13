// Importer l'objet Router de la bibliothèque Express
import express from 'express'

// Créer un nouvel objet Router
const router = express.Router()

// Route pour récupérer tous les utilisateurs
router.get("/all", (req, res) => {
  // Retourner la liste des utilisateurs avec un statut 200
  res.status(200).json(data)
})

// Route pour ajouter un nouvel utilisateur
router.post("/add", (req, res) => {
  // Ajouter l'utilisateur passé en paramètre à la liste des utilisateurs
  data.push(req.body)
  // Retourner la nouvelle liste des utilisateurs avec un statut 201 (créé)
  res.status(201).json(data)
})

// Route pour mettre à jour un utilisateur spécifique
router.put("/update/:id", (req, res) => {
  // Récupérer l'ID de l'utilisateur à mettre à jour
  const id = req.params.id
  // Récupérer le nouveau nom de l'utilisateur
  const name = req.body.name

  // Vérifier si l'utilisateur existe
  const checkIsExiste = data.some(user => user.id == id)
  if(checkIsExiste){
    // Si l'utilisateur existe, mettre à jour son nom
    let result = data.map(user => {
      if(user.id == id) {
        user.name = name
      }
      return user
    })
    // Retourner la liste des utilisateurs mise à jour avec un statut 200
    res.status(200).json(result)
  }
  // Si l'utilisateur n'existe pas, retourner une erreur 404
  if(!checkIsExiste) res.status(404).json({ message: 'user not found !'})
})

// Route pour supprimer un utilisateur spécifique
router.delete('/delete/:id' , (req, res) => {
  // Récupérer l'ID de l'utilisateur à supprimer
  const id = req.params.id
  // Vérifier si l'utilisateur existe
  const checkIsExiste = data.some(user => user.id == id)

  if(checkIsExiste){
    // Si l'utilisateur existe, le supprimer de la liste
    const result = data.filter(user => user.id != id)
    // Retourner la liste des utilisateurs mise à jour avec un statut 200
    res.status(200).json(result)
  }

  // Si l'utilisateur n'existe pas, retourner une erreur 404
  if(!checkIsExiste) res.status(404).json({ message: 'user not found !'})
})

// Exporter l'objet Router pour qu'il puisse être utilisé dans d'autres fichiers
export default router
