import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findAll({
            email: req.body['email'],
            şifre: req.body['şifre']
        }).then(user =>{
            let users = Object.assign({},user)
            if(users.dataValues.email == req.body['email'] && users.dataValues.şifre == req.body['şifre']){
                res.json('girdi götüne')
            }
            else{
                res.json('girmedi götüne')
            }
        });
        }
        catch{
            res.json('ananı')
        }
    };