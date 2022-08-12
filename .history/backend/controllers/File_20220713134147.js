import ProductsFile from "../models/fileProductsModel";

export const createProducts = async (req, res) => {
    try {
      await ProductsFile.create(req.body);
      res.json({
        message: "Product Created",
      });
    } catch (err) {
      res.json({ message: err.message });
    }
  };
