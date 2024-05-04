# LA_FROIRE

# Configuration du projet

Suivez ces étapes pour configurer le projet après l'avoir cloné :

## Étape 1 : Installation des dépendances

Exécutez la commande suivante dans votre terminal :

```bash
npm install

```

## Étape 2 : Création du fichier .env

Créez un fichier `.env` à la racine du projet.

## Étape 3 : Ajout des variables d'environnement

Ajoutez les variables d'environnement suivantes dans le fichier `.env` :

```
PORT=votre_numero_de_port
TOKEN="votre_token"
MONGO_URI='votre_uri_mongodb'

```

- Remplacez `votre_numero_de_port` par le numéro du port que vous souhaitez utiliser pour votre serveur.
- Remplacez `votre_token` par votre jeton secret.
- Remplacez `votre_uri_mongodb` par l'URI de votre base de données MongoDB.

## Note importante

Ces valeurs sont sensibles et ne doivent pas être partagées publiquement. Assurez-vous que le fichier `.env` est inclus dans votre fichier `.gitignore` pour éviter de le pousser accidentellement dans un dépôt public.