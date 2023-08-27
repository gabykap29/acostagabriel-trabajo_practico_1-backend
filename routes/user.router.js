import express from "express";
import { crtlUsers } from "../controllers/auth.users.js";
const routerUsers = express.Router();


//APIS
routerUsers.post('/api/users/create',crtlUsers.create);
routerUsers.get('/api/users',crtlUsers.findAll);
routerUsers.get('/api/users/find/:id',crtlUsers.findOne);
routerUsers.put('/api/users/update/:id',crtlUsers.updateOne);
routerUsers.put('/api/users/delete/:id',crtlUsers.userDelete);

export default routerUsers;