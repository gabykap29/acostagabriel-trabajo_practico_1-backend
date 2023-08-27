//importar los middlwares a utilizar
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import helmet from 'helmet';

//importar rutas
import router from './routes/router.js';
import routerUsers from './routes/user.router.js'
import projectRouter from './routes/project.router.js';

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'))
app.use(helmet());
app.use(cors());
app.use(router);
app.use(routerUsers);
app.use(projectRouter);


//puerto que se ejecutará el servidor
const PORT = process.env.PORT || 3500;
//poner el servidor en escucha
app.listen(PORT,()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}/`)
})