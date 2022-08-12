import Products from "../models/productModel.js";


    try {
      const LoginUser = await Products.findAll({
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

  
export const Login = async (req, res) => {
    try {
        await Products.findAll(req.body,{
           where:{
            email: req.body.email,
            şifre: req.body.şifre
           }
        });
        res.json({
           "message":"Product update"
        })
    } catch (err) {
      res.json({ message: err.message });
    }
  };