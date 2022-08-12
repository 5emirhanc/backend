import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findOne({
            email: req.body.email
        });

         res.json("emailasdmalsmd")   
    } catch (err) {
      res.json("hata amına kodum");
    }
  };