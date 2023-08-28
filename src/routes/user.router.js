import express from "express";
import { crtlUsers } from "../controllers/auth.users.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { body } from "express-validator";
const routerUsers = express.Router();


//APIS
routerUsers.post('/api/users/create',
//validaciones
validateSchema([
    body('lastname').notEmpty().withMessage('El apellido es obligatorio'),
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('username').notEmpty().withMessage('El título es obligatorio'),
    body('pass')
    .notEmpty().withMessage('La contraseña es obligatoria')
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/^(?=.*[A-Z])/).withMessage('La contraseña debe contener al menos una letra mayúscula'),
]),
crtlUsers.create);
routerUsers.get('/api/users',crtlUsers.findAll);
routerUsers.get('/api/users/find/:id',crtlUsers.findOne);
routerUsers.put('/api/users/update/:id',crtlUsers.updateOne);
routerUsers.put('/api/users/delete/:id',crtlUsers.userDelete);

export default routerUsers;