import dotenv from 'dotenv';
import cowsay from 'cowsay';

// Charger les variables d'environnement depuis .env
dotenv.config();

// Utiliser les variables d'environnement
const message = `Hello I'm ${process.env.NAME} from ${process.env.CAMPUS}!`;

// Afficher la vache avec le message
console.log(cowsay.say({ text: message }));
