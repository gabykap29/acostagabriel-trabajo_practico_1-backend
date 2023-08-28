import Project from '../models/project.js'
import Task from '../models/Task.js';
//crear un objeto para utilizar funciones como propiedades, con el fin de exportar solo el objeto
export const crtlProject={};
//crear un nuevo proyecto
crtlProject.create = async(req,res)=>{
    const {title,date, description, idUser} = req.body;
    try {
        const newProject = await Project.create({
            title,
            date,
            description,
            idUser,
            id: idUser
        });
        if(!newProject){
            throw({
                status: 400,
                message: 'error al crear el Proyecto!'
            });
        };
        return res.status(201).json(newProject);
    } catch (error) {
        console.log(error);
        return res.status(error.status||500).json({message:error.message|| 'error interno del servidor!'});
    };
};
//Buscar un proyecto
crtlProject.findOne = async (req,res) =>{
    const {id} = req.params;
    try {
        const project = await Project.findOne({
            where:{
                idProject:id
            },
            include:{model:Task}
        });
        if(!project){
            throw({
                status:404,
                message:'El proyecto no existe!'
            });
        };
        return res.json(project);
    } catch (error) {
        console.log(error);
        return res.status(error.status|| 500).json({
            message:error.message || 'error interno del servidor!'
        });
    };
};
//listado de proyectos por usuario
crtlProject.findbyUser = async (req,res)=>{
    const {idUser} = req.params
    
    try {
        const project = await Project.findAll({
            where:{
                idUser:idUser
            }
        });
        if(!project){
            throw({
                status:404,
                message:'El usuario no creo ningun proyecto aún!'
            });
        };
        return res.status(200).json({project});
    } catch (error) {
        console.log(error);
        return res.status(error.status  || 500 ).json({message: error.message || 'Error interno del servidor al obtener los proyectos°'})
    }

}
//listado de proyectos
crtlProject.findAll = async (req,res)=>{
    try {
        const projects = await Project.findAll({
            where:{
                state:true
            }
        });
        //si no existen proyectos, devuelve un 404
        if(!projects){
            throw({
                status:404,
                message:'Aun no se han cargado proyectos!'
            });
        };
        return res.status(200).json({projects});
    } catch (error) {
        console.log(error);
        return res.status(error.status|| 500).json({message:'Error interno del servidor al obtener los Proyectos!'});
    };
};
//Actualizar un proyecto
crtlProject.updateOne = async (req,res)=>{
    const {id}= req.params;
    const {title,date,description,idUser} = req.body;
    try {
        const projectUpdate = await Project.update({
            title,
            date,
            description,
            idUser,
            id: idUser,
        },{
        where:{
            idProject:id,
            state:true
        }});
        if(!projectUpdate){
            throw({
                status:400,
                message:'Error al actilizar el proyecto!'
            });
        };
        return res.status(201).json({message:'Actualizado correctamente!'});
    } catch (error) {
        console.log(error);
        return res.status(error.message||500).json({message:'Error interno del servidor al actualizar el proyecto!'});
    };
};
//Eliminar un proyecto
crtlProject.deleteProject = async (req,res)=>{
    const {id}= req.params;
    try {
        const project = await Project.findOne({
            where:{
                idProject:id,
                state:true,
            }
        });
        if(!project){
            throw({
                status:404,
                message:'El proyecto no existe o ya fue eliminado!'
            });
        };
        const deleteProject = await Project.update({
            state:false,
        },{
        where:{
            idProject:id,
            state:true
        }
    }
    );
    return res.status(201).json({
        message:'Proyecto Eliminado con éxito!'
    });
    } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
        message: error.message || 'error interno del Servidor al eliminar un usuario!'
    }); 
    }
};
