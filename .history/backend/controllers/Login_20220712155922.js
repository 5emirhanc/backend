import { where } from "sequelize/types/sequelize.js";
import Products from "../models/productModel.js";


export const Login =  async (req, res) => {
    try {
     const user = Products.findOne({ where: { email } });
          

    } catch {
      res.json('yarak3')
  
    }
  }