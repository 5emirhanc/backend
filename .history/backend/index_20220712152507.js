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

app.post("/products/login",(res,req)=>{
    const email = req.body.email;
    const şifre = req.body.şifre;

    db.query(
        "select * from products where email = ? and şifre = ?",
        [email,şifre],
        (err,result)=>{
            if(err){
                res.send({err:err})
            }
            if(result){
                res.send(result);
            }else{
                res.send({message:"Email veya Şifre Yanlış"})
            }
        }
    )
})


app.listen(5000,()=> console.log('server port 5000'));