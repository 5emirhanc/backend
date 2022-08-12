import Products from "../models/productModel.js";


export const Login =  async (req, res) => {
    try {
      Products.findAll({where:{email:req.body['email']}}).then(d => d.filter(x=> x.email ==req.body['email'] ));
          

    } catch {
      res.json('yarak3')
  
    }
  }