import Products from "../models/productModel.js";


export const Login = async (req, res) => {
    try {
        await Products.findOne({
            email: req.body.email
        }, function(err, result) {
            if (err) throw err;
            console.log(result.name);
          });
        return 
        if(res.status(200)){
            res.json('ok')
        }
        else{
            res.json('cancel')
        }
    } catch (err) {
      res.json({ message: err.message });
    }
  };