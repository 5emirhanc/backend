import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const product_file = db.define('product_file',{
    file_src:{
        type:DataTypes.STRING
    }
},{
    freezeTableName: true
})

export default product_file;