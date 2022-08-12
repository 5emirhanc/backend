import Products from "../models/productModel.js";

export const Login = async (req, res) => {
    try {
      const login = await Products.findOne({
        where: {
          email: req.params.email,
          şifre: req.params.şifre
        },
      });
      res.json({
        message: "Giriş Yapıldı",
      });
    } catch (err) {
      res.json({ message: err.message });
    }
  };