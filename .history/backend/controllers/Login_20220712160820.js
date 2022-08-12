import Products from "../models/productModel.js";


export const Login =  async (req, res) => {
    try {
        const email = req.body['email'];
        const user =  Products.findAll({where:{email}});
        if (!user)
           return res.json('yanloşamınakodım')
        else{
            return res.json('girdi')

        }

    } catch {
      res.json('yarak3')
  
    }
  }