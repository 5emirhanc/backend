import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        alert(req.params.email,"email");
        await Products.findAll(req.body,{
           where:{
            email: req.params.email,
            şifre: req.params.şifre
           }
        });
        res.json({
           "message":"grş ypld"
        })
    } catch (err) {
      res.json({ message: err.message });
    }
  };