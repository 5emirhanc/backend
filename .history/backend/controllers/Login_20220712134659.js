import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findAll(req.body,{
           where:{
            email: req.params.email,
            şifre: req.params.şifre
           }
        });
        
        res.json(Response)
    } catch (err) {
      res.json({ message: err.message });
    }
  };