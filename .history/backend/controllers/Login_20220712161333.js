import Products from "../models/productModel.js";


export const Login =  async (req, res) => {
    try {
        const email = req.body['email'];
        const user =  Products.findAll({where:{email}});
        let ss = Object.assign({},user)
        if (user == {})
           return res.json('girmedi')
        else{
            return res.json(ss)
        }

    } catch {
      res.json('yarak3')
  
    }
  }