import ProductsFile from "../models/fileProductsModel";

export const createProductsFile = async (req, res) => {
    try {
      await ProductsFile.create(req.body);
      res.json({
        message: "Product File created",
      });
    } catch (err) {
      res.json({ message: err.message });
    }
  };
