import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const beadProducts = db.define('beadProduts',{
    ProductName:{
        type:DataTypes.STRING
    },
    ProductImage:{
        type:DataTypes.BLOB
    },
    ProductContant:{
        type:DataTypes.TEXT
    }
},{
    freezeTableName: true
})

export default beadProduts;