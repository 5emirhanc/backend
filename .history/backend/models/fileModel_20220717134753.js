import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const file_product = db.define('file_product',{
    fileName:{
        type:DataTypes.STRING
    },
    ImagePath:{
        type:DataTypes.BLOB
    }
})

export default file_product;