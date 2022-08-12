import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const seatProducts = db.define('kitchenProducts',{
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

export default kitchenProducts;