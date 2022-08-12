import express, { application } from "express";
import db from './config/database.js';
import productRoutes from './routes/index.js';

const app = express();

try {
    await db.authenticate();
    console.log('database connected...');
} catch (error) {
    console.log('connection error',error);
}

app.use(productRoutes);

app.listen(5000,()=> console.log('server port 5000'));