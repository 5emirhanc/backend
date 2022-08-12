import express from "express";
import db from './config/database.js';
import productRoutes from './routes/index.js';
import cors from "cors";
const ğath=require("path");
const File =require("./controllers/File");
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

app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.post("File",(req,res,next)=>{
    try {
        File(req,res,function(error){
            if(err){
                console.log("err",err)
            }
            else{
                res.json(req.file).status(200)
            }
        })
    } catch (error) {
        console.log("bir hata oluştı");
    }
})



app.listen(5000,()=> console.log('server port 5000'));