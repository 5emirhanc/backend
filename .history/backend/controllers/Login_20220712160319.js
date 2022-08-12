import Products from "../models/productModel.js";


export const Login =  async (req, res) => {
    try {
     const user =  Products.findAll({where:{email:req.body['email']}});
          if(user){
            res.json('yarak1')

          }

    } catch {
      res.json('yarak3')
  
    }
  }