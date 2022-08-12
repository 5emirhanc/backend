import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const stateProducts = db.define('stateProducts',{
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

export default seatProducts;