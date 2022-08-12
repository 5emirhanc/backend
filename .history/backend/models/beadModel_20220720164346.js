import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const beadProduts = db.define('beadProduts',{
    :{
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

export default beadProduts;