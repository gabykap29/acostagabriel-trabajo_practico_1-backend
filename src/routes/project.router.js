import express from 'express';
import { crtlProject } from '../controllers/auth.project.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { body } from 'express-validator';
const projectRouter = express.Router();

//APIS
projectRouter.post('/api/projects/create',
validateSchema([
    body('title').notEmpty().withMessage('El título es obligatorio'),
    body('date').isISO8601().withMessage('La fecha no es válida'),
    body('description').notEmpty().withMessage('la descripción es obligatoria'),
]),
crtlProject.create);
projectRouter.get('/api/projects',crtlProject.findAll);
projectRouter.get('/api/projects/find/:id',crtlProject.findOne);
projectRouter.put('/api/projects/update/:id',crtlProject.updateOne);
projectRouter.put('/api/projects/:id',crtlProject.deleteProject);
//traer todos los proyectos por usuario
projectRouter.get('/api/projects/findUser/:idUser',crtlProject.findbyUser)
export default projectRouter; 