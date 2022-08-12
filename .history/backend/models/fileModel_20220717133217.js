import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const File = db.define('file_product',{
    email:{
        type:DataTypes.STRING
    },
    fullname:{
        type:DataTypes.STRING
    },
    şifre:{
        type:DataTypes.TEXT
    }
},{
    freezeTableName: true
})

export default File;