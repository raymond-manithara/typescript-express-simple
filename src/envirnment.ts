import {config} from 'dotenv';
config();


export const port = String(process.env.PORT);