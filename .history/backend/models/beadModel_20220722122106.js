import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const beadProducts = db.define('beadProducts',{
    ProductName:{
        type:DataTypes.STRING
    },
    ProductContant:{
        type:DataTypes.TEXT
    }
},{
    freezeTableName: true
})

export default beadProducts;