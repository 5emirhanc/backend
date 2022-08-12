import express, { application } from "express";
import db from './config/database.js';


const app = express();

try {
    await db.authenticate();
    console.log('database connected...');
} catch (error) {
    console.log('connection error',error);
}

app.get('/',(req,res)=>{
    res.send('welcome');
});

app.listen(5000,()=> console.log('server port 5000'));