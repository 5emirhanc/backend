import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findOne({
            email: req.body['email']
        }).then(user => res.json(req.body['email']));
        }
        catch{
            res.json('ananı')
        }
    };