import Products from "../models/productModel.js";


export const Login =  async (req, res) => {
    try {
      let foundUser = Products.findOne((data) => req.body.email === data.email);
      if (foundUser) {
         return res.json('yarak')
      }
      else{
        return res.json('yarak2')
  
      }
    } catch {
        return res.json('yarak3')
  
    }
  }