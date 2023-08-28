//importar el modelo de Tareas
import Category from "../models/Categories.js";
import Task from "../models/Task.js";
//exportar el objeto para trabajar con sus propiedades como funciones
export const crtlTask = {};
//crear tarea
crtlTask.create = async (req,res)=>{
    const {nameTask,description,dateInit,dateFinish,priority,idCategory,idProject} = req.body;

try {
    const newTask = await Task.create({
        nameTask,
        description,
        dateInit,
        dateFinish,
        priority,
        idCategory,
        idProject,
    });
    if(!newTask){
        throw(
            {
                status:400,
                message:'error al crear la tarea!'
            }
        );
    };
    return res.status(201).json(newTask);
} catch (error) {
    console.log(error);
    return res.status(error.status|| 500).json({message:error.message || 'error interno de servidor al crear la tarea!'})
};
};
//obtener una tarea
crtlTask.findOne = async(req,res)=>{
    const {idTask} = req.params;
    try {
        const task = await Task.findOne(
            {
                where:{
                    idTask,
                },
                include:{
                    model:Category
                }
            },);
        if(!task){
            throw({
                status:404,
                message:'La tarea no existe!'
            });
        };
        return res.json(task);
    } catch (error) {
        console.log(error.status);
        return res.status(error.status||500).json({
            message: error.message || 'Error interno del servidor al obtener la tarea!'
        });
    };
};
//obtener un listado de tareas por proyecto
crtlTask.findAll = async(req,res)=>{
    const {idProject}=req.params;
    try {
        const task=await Task.findAll({
            where:{
                state:true,
                idProject
            },
            include:{
                model:Category
            }
        });
        return res.status(200).json({task});
    } catch (error) {
        console.log(error.status);
        return res.status(error.status || 500).json({message:error.message||'error interno del servidor al obtener las tareas!'});
    };
};
//actualizar una tarea
crtlTask.updateOne = async (req,res)=>{
    const {idTask}=req.params;
    const {nameTask,description, dateInit,dateFinish, priority,idCategory,idProject} = req.body;
    try {
        const taskUpdate = await Task.update({
            nameTask,
            description,
            dateInit,
            dateFinish,
            priority,
            idCategory,
            idProject
        },
        {where:{
            idTask,
            state:true
        }});
        if(!taskUpdate){
            throw({
                status:400,
                message:'Error al actualizar la Tarea!'
            });
        };
        return res.status(201).json({taskUpdate});
    } catch (error) {
        console.log(error);
        return res.status(error.status||500).json({message:error.message||'error interno del servidor al intentar actualizar la tarea!'});
    };
};
//eliminar una tarea (metodo lógico)
crtlTask.deleteTask = async (req,res)=>{
    const {idTask}= req.params;
    try {
        const task = await Task.findOne({
            where:{
                idTask,
                state:true
            }
        });
        if(!task){
            throw({
                status:404,
                message:'La tarea no existe en la base de datos!'
            });
        };
        const deleteTask = await Task.update({
            state:false
        },{where:{
            idCategory,
            state:true
        }});
        if(!deleteTask){
            throw({
                status:400,
                message:'error al intentar eliminar la tarea!, la tarea fue encontraba, pero no fue posible eliminarla!'
            })
        };
        return res.status(201).json({message:'Tarea eliminada con éxito!'});
    } catch (error) {
        console.log(error.status);
        return res.status(error.status||500).json({
            message: error.message|| 'Error interno del servidor al intentar eliminar la tarea!'
        });
    };
};