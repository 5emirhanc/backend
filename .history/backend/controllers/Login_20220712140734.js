import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findOne({
            email: req.body.email
        });

         res.json(req.body.email,"emailasdmalsmd")   
    } catch (err) {
      res.json({ message: err.message });
    }
  };