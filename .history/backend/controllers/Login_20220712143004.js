import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findOne({
            email: req.body['email']
        }).then(user =>{
            let users = Object.assign({},user)
            if(users.dataValues.email == req.body['email']){
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