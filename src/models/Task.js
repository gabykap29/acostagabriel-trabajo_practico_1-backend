import { sequelize } from "../db.js";
import { DataTypes,Model } from "sequelize";
import Project from "./project.js";
import Category from "./Categories.js";

//modelo de Tareas
const Task = sequelize.define('Task',{
    idTask:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nameTask:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    dateInit:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    dateFinish:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    priority:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    state:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},{
    sequelize,
    paranoid:true,
    modelName:'Task',
    tableName:'Tasks'
});
//crear la tabla categorias, antes de que se  haga la relación de 1 a muchos

//asociaciones
Project.hasMany(Task, { foreignKey: 'idProject' });
Task.belongsTo(Project, { foreignKey: 'idProject' });

Category.hasMany(Task, { foreignKey: 'idCategory' });
Task.belongsTo(Category, { foreignKey: 'idCategory' });
//crear si no existe la tabla tareas
Category.sync();
Task.sync();

export default Task;