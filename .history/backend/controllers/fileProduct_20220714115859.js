import fileProduct from '../models/fileProductModel.js';

export const GetfileProducts = async (req, res) => {
    try {
      const fileProduct = await fileProduct.findAll({
        where: {
          id: req.params.id,
        },
      });
      res.json(fileProduct[0]);
    } catch (err) {
      res.json({ message: err.message });
    }
  };