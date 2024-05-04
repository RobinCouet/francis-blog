import express from 'express'
import mongoose from 'mongoose'
import { env } from './config.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

// ROUTES
import routerUser from './router.user.js'
import routerMongoUser from './user.js'
import routerArticle from './article.js'
import routerAvis from './avis.js'

const app = express()

// PORT
const PORT = env.port || 8080

// DATABASE MONGOOSE
mongoose
  .connect(env.mongoURI, {dbName: 'Utilisateur'})
  .then(() => console.log("Connexion à Mongoose réussie !"))
  .catch(error => console.log(error))

// MIDDLEWARE
app.use(express.json()) 
app.use(cookieParser())
app.use(cors())

// MIDDLEWARE TO ROUTE
app.use("/api/user", routerUser)
app.use("/api/mongo/user", routerMongoUser)
app.use("/api/article", routerArticle)
app.use("/api/avis", routerAvis)

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})