import beadProducts from "../models/beadModel.js";
import kitchenProducts from "../models/kitchenModel.js";
import seatProducts from "../models/seatModel.js";
import stateProducts from "../models/stateModel.js";
import Products from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const createProducts = async (req, res) => {
  try {
    await Products.create(req.body);
    res.json({
      message: "Product Created",
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const getAllProductsByID = async (req, res) => {
  try {
    const products = await Products.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(products[0]);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
      await Products.update(req.body,{
         where:{
            id:req.params.id
         }
      });
      res.json({
         "message":"Product update"
      })
  } catch (err) {
    res.json({ message: err.message });
  }
};


export const deleteProduct = async (req, res) => {
   try {
       await Products.destroy({
          where:{
             id:req.params.id
          }
       });
       res.json({
          "message":"Product deleted"
       })
   } catch (err) {
     res.json({ message: err.message });
   }
 };

 export const beadProdut = async (req, res) => {
  try {
    const file = await beadProducts.findAll();
    console.log(file)
    res.json(file);
  } catch (err) {
    res.json({ message: err.message});
  }
};



export const kitch = async (req, res) => {
  try {
    const file = await kitchenProducts.findAll();
    console.log(file)
    res.json(file);
  } catch (err) {
    res.json({ message: err.message});
  }
};


export const beadProdu = async (req, res) => {
  try {
    const file = await beadProducts.findAll();
    console.log(file)
    res.json(file);
  } catch (err) {
    res.json({ message: err.message});
  }
};



export const beadProdu = async (req, res) => {
  try {
    const file = await beadProducts.findAll();
    console.log(file)
    res.json(file);
  } catch (err) {
    res.json({ message: err.message});
  }
};
