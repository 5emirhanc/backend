import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findOne({
            email: req.body['email']
        }).then(user =>{
            let users = Object.assign({},user)
            res.json(users.getDataValue('email'))
        });
        }
        catch{
            res.json('ananı')
        }
    };