import { Sequelize } from "sequelize";
import userModel from './user.model.js'
import articleModel from "./article.model.js";

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

const {
    User,
    Article
} = connection.models;

User.hasMany(Article);
Article.belongsTo(User);


await connection.sync({ alter: true })

console.log('Synchro OK');