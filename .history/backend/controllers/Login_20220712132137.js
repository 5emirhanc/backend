import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findAll(req.body,{
           where:{
            email: req.body.email,
            şifre: req.body.şifre
           }
        });
        res.json({
           "message":"grş ypld"
        })
    } catch (err) {
      res.json({ message: err.message });
    }
  };