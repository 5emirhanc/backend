import Products from "../models/productModel.js";


export const Login =  async (req, res) => {
    try {
      Products.findAll({email:req.body['email']});
          res.json('yarak2')

    } catch {
      res.json('yarak3')
  
    }
  }