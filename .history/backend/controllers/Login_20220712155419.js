import Products from "../models/productModel.js";


export const Login =  async (req, res) => {
    try {
      Products.findAll({email:req.body['email']}).then(d => res.json(d.length));
          

    } catch {
      res.json('yarak3')
  
    }
  }