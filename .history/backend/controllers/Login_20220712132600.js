import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    const regEmail=email;
    const regŞifre=şifre;
    try {
        await Products.findAll(req.body,{
           where:{
            email: req.params.email,
            şifre: req.params.şifre
           }
        });
        if (regEmail==Products.email && regŞifre==Products.şifre) {
            res.json({
                "message":"grş ypld"
             })
        } else {
            res.json({
                "message":"hata"
             })
        }
       
    } catch (err) {
      res.json({ message: err.message });
    }
  };