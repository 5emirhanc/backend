import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const file_product = db.define('file_product',{
    name:{
        type:DataTypes.STRING
    },
    file:{
        type:DataTypes.BLOB('long')
    }
},{
    freezeTableName: true
})

export default file_product;