import { Sequelize } from "sequelize";

const db = new Sequelize('mem_db','roor',''{
     host:"localhost",
     dialect:"mysql",

});

export default db;