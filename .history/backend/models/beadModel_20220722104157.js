import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const beadProducts = db.define('beadProducts',{
    ProductName:{
        type:DataTypes.STRING
    },
    ProductImage:{
        type:DataTypes.BLOB('long')
    },
    ProductContant:{
        type:DataTypes.TEXT
    }S
},{
    freezeTableName: true
})

export default beadProducts;