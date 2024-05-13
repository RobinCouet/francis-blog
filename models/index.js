import { Sequelize } from "sequelize";
import userModel from './user.model.js'

// Nouvelle connexion à la DB
const sequelize = new Sequelize(
    'francis', // Nom de la base de donnée
    'root', // identifiant Mysql
    '', // Mot de passe Mysql
    {
        host: 'localhost', // URL de mySQL
        dialect: 'mysql'
    }
);

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

userModel(sequelize, Sequelize);