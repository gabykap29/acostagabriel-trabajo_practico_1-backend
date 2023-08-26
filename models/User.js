//importar SEQUELIZE desde el archivo db de la conexión
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db.js";

const User =  sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    username:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    pass:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    state:{
        type: DataTypes.BOOLEAN, defaultValue:true
    },
},
{
    sequelize,
    paranoid:true,
    paranoid:true,
    modelName: 'User',
    tableName:'Users',
});
    // Sincroniza el modelo Users con la base de datos
    
  User.sync();

  
export default User;
