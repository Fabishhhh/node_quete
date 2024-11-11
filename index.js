import dotenv from 'dotenv';
import cowsay from 'cowsay';

dotenv.config();

const message = `Hello I'm ${process.env.NAME} from ${process.env.CAMPUS}!`;

console.log(cowsay.say({ text: message }));
