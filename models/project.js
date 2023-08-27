import { sequelize } from "../db.js";
import { DataTypes,Model } from "sequelize";
import User from './User.js'
//modelo de tareas
const Project = sequelize.define('Project',{
    idProject:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    state:{
        type: DataTypes.BOOLEAN, 
        defaultValue:true
    },
},{
    sequelize,
    paranoid:true,
    modelName:'Project',
    tableName:'Projects',
});
//asociación de 1 a muchos con usuarios
User.hasMany(Project,{foreignKey:'idUser'})
Project.belongsTo(User,{foreignKey:'id'})
//comprobar si existe la tabla, sino la crea
Project.sync();

export default Project;