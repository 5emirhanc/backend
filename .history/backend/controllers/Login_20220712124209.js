import Products from "../models/productModel.js";

export const Login = async (req, res) => {
    try {
      const login = await Products.findOne({
        where: {
          email: req.body.email,
          şifre: req.body.şifre
        },
      });
      res.json({
        message: "Giriş Yapıldı",
      });
    } catch (err) {
      res.json({ message: err.message });
    }
  };