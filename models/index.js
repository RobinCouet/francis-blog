import { Sequelize } from "sequelize";
import userModel from './user.model.js'
import articleModel from "./article.model.js";
import avisModel from "./avis.model.js";
import articlePhotoModel from "./articlePhoto.model.js";

// Nouvelle connexion à la DB
const connection = new Sequelize(
    'francis', // Nom de la base de donnée
    'root', // identifiant Mysql
    '', // Mot de passe Mysql
    {
        host: 'localhost', // URL de mySQL
        dialect: 'mysql'
    }
);

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

userModel(connection, Sequelize);
articleModel(connection, Sequelize);
avisModel(connection, Sequelize);
articlePhotoModel(connection, Sequelize);

const {
    User,
    Article,
    Avis,
    ArticlePhoto
} = connection.models;

// has many permet de préciser qu'un utilisateur peut avoir plusieurs articles
// Cela va permettre de recuperer tous les articles d'un user en faisant User.articles
User.hasMany(Article, { as: "articles" });
// belongsTo va permettre de créer le lien entre Article et User
// Dans Article, il va rajouter la colonne UserId
Article.belongsTo(User);

Article.hasMany(Avis, { as: "avis" });
Avis.belongsTo(Article)

User.hasMany(Avis, { as: "avis" });
Avis.belongsTo(User);

Article.hasMany(ArticlePhoto, { as: "photos" })
ArticlePhoto.belongsTo(Article);

await connection.sync({ alter: true })

console.log('Synchro OK');

export {
    User,
    Article,
    Avis,
    ArticlePhoto
}