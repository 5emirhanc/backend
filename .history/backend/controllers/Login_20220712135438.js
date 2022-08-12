import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findOne({
           where:{
            email: req.body['email'],
            şifre: req.body['şifre']
           }
        });
        
        if(res.status(200)){
            res.json('ok')
        }
        else{
            res.json('cancel')
        }
    } catch (err) {
      res.json({ message: err.message });
    }
  };