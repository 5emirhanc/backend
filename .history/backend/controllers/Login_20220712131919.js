import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findOne(req.body,{
           where:{
            email: req.params.email,
            şifre: req.params.şifre
           }
        });
        if (!email && !şifre) {
            res.json({
                "message":"grş ypld"
             })
        }
        
    } catch (err) {
      res.json({ message: err.message });
    }
  };