import express from 'express';
import { crtlTask } from '../controllers/auth.task.js';
import { body } from 'express-validator';
import { validateSchema } from '../middlewares/validateSchema.js';

const routerTask = express.Router();

//apis
routerTask.post(
    '/api/task/create',
    //validaciones
    validateSchema([
        body('nameTask').notEmpty().withMessage('El título es obligatorio'),
        body('dateInit').isISO8601().withMessage('La fecha de inicio no es válida'),
        body('dateFinish').isISO8601().withMessage('La fecha de finalización no es válida')
        .custom((value, { req }) => {
            if (value <= req.body.dateInit) {
            throw new Error('La fecha de finalización debe ser posterior a la fecha de inicio');
            }
            return true;
        }),
        body('description').notEmpty().withMessage('La descripción es obligatoria'),
    ]),
    crtlTask.create
    );
routerTask.get('/api/task/find/:idProject',crtlTask.findAll);
routerTask.get('/api/task/findOne/:idTask',crtlTask.findOne);
routerTask.put('/api/task/update/:idTask',crtlTask.updateOne);
routerTask.put('/api/task/delete/:idTask',crtlTask.deleteTask);


export default routerTask;