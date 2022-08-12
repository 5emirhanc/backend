import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findOne({
            email: req.body['email']
        }).then(user => res.json(user));
        }
        catch{
            res.json('ananı')
        }
    };