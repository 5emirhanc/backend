import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users',{
    email:{
        type:DataTypes.STRING
    },
    fulname:{
        type:DataTypes.DOUBLE
    }
},{
    freezeTableName: true
})

export default Users;