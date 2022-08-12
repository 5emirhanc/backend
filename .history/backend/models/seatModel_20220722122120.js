import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const seatProducts = db.define('seatProducts',{
    ProductName:{
        type:DataTypes.STRING
    },
    ProductContant:{
        type:DataTypes.TEXT
    }
},{
    freezeTableName: true
})

export default seatProducts;