import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findOne(req.body,{
           where:{
            email: req.params.email,
            şifre: req.params.şifre
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