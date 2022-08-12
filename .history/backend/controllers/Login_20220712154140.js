import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
       let founduser = await Products.findOne((data) => req.body['email'] === data.email);
       if(founduser){
            res.json('girdi');
       }
       else{
        res.json('girmedi')
       }
        }
        catch{
            res.json('HATA')
        }
    };