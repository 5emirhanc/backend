import Products from "../models/productModel.js";


export const Login =  async (req, res) => {
    try {
        const mail = req.body['email'];
        const user =  Products.findAll({where:{mail}});
        if (!user)
        throw 'Username or password is incorrect';

    } catch {
      res.json('yarak3')
  
    }
  }