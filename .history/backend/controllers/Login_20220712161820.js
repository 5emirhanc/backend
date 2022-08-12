import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        const email = req.body['email'];
        await Products.findAll({where:{email}
        }).then(user =>{
            let users = Object.assign({},user)
            if(users.dataValues.email == req.body['email'] && users.dataValues.şifre == req.body['şifre']){
                res.json(users)
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