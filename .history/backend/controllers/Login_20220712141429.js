import Products from "../models/productModel.js";


export const Login = async (req, res,next) => {
    try {
        await Products.findOne({
            email: req.body['email']
        }).exec((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
          });
        }
        catch{
            res.json('ananı')
        }
    };