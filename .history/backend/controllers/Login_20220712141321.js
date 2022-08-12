import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findOne({
            email: req.body['email']
        }).exec((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            // Email
            Products.findOne({
              şifre: req.body['şifre']
            }).exec((err) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              next();
            });
          });
        }
        catch{
            res.json('ananı')
        }
    };