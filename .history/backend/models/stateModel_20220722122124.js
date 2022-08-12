import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const stateProducts = db.define('stateProducts',{
    ProductName:{
        type:DataTypes.STRING
    },
    ProductContant:{
        type:DataTypes.TEXT
    }
},{
    freezeTableName: true
})

export default stateProducts;