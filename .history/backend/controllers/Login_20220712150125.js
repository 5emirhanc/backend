import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findOne({
            email: req.body['email'],
            şifre: req.body['şifre']
        }).then(user =>{
            let users = Object.assign({},user)

            res.json(users.dataValues[1].email)

            if(users.dataValues.email == req.body['email'] && users.dataValues.şifre == req.body['şifre']){
                res.json('Giriş Başarılı')
            }
            else{
                res.json('Giriş Başarısız')
            }
        });
        }
        catch{
            res.json('HATA')
        }
    };