import { sequelize } from "../db.js";
import { DataTypes,Model } from "sequelize";
//modelo categorias
const Category = sequelize.define('Category',{
    idCategory:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    categoryName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},{
    sequelize,
    paranoid:true,
    modelName:'Category',
    tableName:'Categories'
});
//Insertar categorias por defecto al iniciar.
Category.addHook('afterSync', 'createDefaultCategories', async () => {
    try {
        const category = Category.findAll();
        if((await category).length === 0){
            await Category.bulkCreate([
                { categoryName: 'Desarrollo' },
                { categoryName: 'Diseño' },
                { categoryName: 'Markething' },
                { categoryName: 'Seguridad' },
                { categoryName: 'Test' },
                
            ]);
        }else{
            console.log('categorias cargadas!');
        }

    } catch (error) {
        console.error('Error al crear categorías por defecto:', error);
    }
});
export default Category;