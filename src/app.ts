import express,{Application} from 'express';
import { port } from './envirnment';
import logger from './logger';

const app:Application = express();



app.listen(port,()=>{
    logger.info(`App backend is running in PORT : ${port}`);
});