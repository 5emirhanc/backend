import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findOne({
            email: req.body.email
        }).exec((err, user) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            if (user) {
              res.status(400).send({ message: "Failed! Username is already in use!" });
              return;
            }});
        
    } catch (err) {
      res.json({ message: err.message });
    }
  };