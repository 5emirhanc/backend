import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        const email = req.body['email'];
        const şifre = req.body['şifre'];
        await Products.findOne({where:{email,şifre}
        }).then(user =>{
            if(user){
                res.json('girdi')
            }
            else{
                res.json('HATAqweq')

            }
        });
        }
        catch{
            res.json('HATA')
        }
    };