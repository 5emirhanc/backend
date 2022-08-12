import Products from "../models/productModel.js";

export const getAllProducts = async(req,res)=>{
   const products=await Products.findAll();
   res.json(products);
}