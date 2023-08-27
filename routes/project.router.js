import express from 'express';
import { crtlProject } from '../controllers/auth.project.js';
const projectRouter = express.Router();

//APIS
projectRouter.post('/api/projects/create',crtlProject.create);
projectRouter.get('/api/projects',crtlProject.findAll);
projectRouter.get('/api/projects/find/:id',crtlProject.findOne);
projectRouter.put('/api/projects/update/:id',crtlProject.updateOne);
projectRouter.put('/api/projects/:id',crtlProject.deleteProject);
//traer todos los proyectos por usuario
projectRouter.get('/api/projects/findUser/:idUser',crtlProject.findbyUser)
export default projectRouter; 