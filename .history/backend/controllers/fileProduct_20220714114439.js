export const fileProducts = async (req, res) => {
    try {
      const fileProduct = await fileProduct.findAll({
        where: {
          id: req.params.id,
        },
      });
      res.json(products[0]);
    } catch (err) {
      res.json({ message: err.message });
    }
  };