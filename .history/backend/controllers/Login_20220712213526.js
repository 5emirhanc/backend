import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        const email = req.body['email'];
        const şifre = req.body['şifre'];
        await Products.findOne({where:{email,şifre}
        }).then(user =>{
            if(user){
                const users = Object.assign({},user);
                
                res.json(users.dataValues.fullname)
            }
            else{
                res.json('Şifre veya Mail yanlış')
            }
        });
        }
        catch{
            res.json('HATA')
        }
    };