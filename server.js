import express from 'express'
import { env } from './config.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

// Connexion MySQL
import './models/index.js'

// // ROUTES
import routerUser from './routes/user.js'
import routerArticle from './routes/article.js'
import routerAvis from './routes/avis.js'

const app = express()

// PORT
const PORT = env.port || 8080


// MIDDLEWARE
app.use(express.json())
app.use(cookieParser())
app.use(cors())

// MIDDLEWARE TO ROUTE
app.use("/api/user", routerUser)
app.use("/api/article", routerArticle)
app.use("/api/avis", routerAvis)

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})