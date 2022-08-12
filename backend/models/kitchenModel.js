import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const kitchenProducts = db.define('kitchenproducts',{
    ProductName:{
        type:DataTypes.STRING
    },
 
    ProductContant:{
        type:DataTypes.TEXT
    }
},{
    freezeTableName: true
})

export default kitchenProducts;