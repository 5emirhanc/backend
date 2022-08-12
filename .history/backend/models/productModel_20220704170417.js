import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Products = db.define('products',{
    email:{
        type:DataTypes.STRING
    },
    fullname:{
        type:DataTypes.STRING
    }
},{
    freezeTableName: true
})

export default Products;