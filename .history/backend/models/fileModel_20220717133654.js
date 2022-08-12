import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const File = db.define('file_product',{
    name:{
        type:DataTypes.STRING
    },
    file:{
        type:DataTypes.BLOB
    }
},{
    freezeTableName: true
})

export default File;