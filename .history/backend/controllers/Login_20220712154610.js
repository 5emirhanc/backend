import Products from "../models/productModel.js";


export const Login =  async (req, res) => {
    try {
      let foundUser = Products.findAll((data) => req.body.email === data.email);
      if (foundUser) {
          res.json('yarak')
      }
      else{
          res.json('yarak2')
  
      }
    } catch {
      res.json('yarak3')
  
    }
  }