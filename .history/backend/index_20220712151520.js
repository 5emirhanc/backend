import express from "express";
import db from './config/database.js';
import productRoutes from './routes/index.js';
import cors from "cors";
const app = express();

try {
    await db.authenticate();
    console.log('database connected...');
} catch (error) {
    console.log('connection error',error);
}

app.use(cors());
app.use(express.json());
app.use('/products',productRoutes);
app.get('/login',async(req,res)=>{
    let sql =   `select * from products where email=${}and şifre=girilenşifre`
})
app.listen(5000,()=> console.log('server port 5000'));