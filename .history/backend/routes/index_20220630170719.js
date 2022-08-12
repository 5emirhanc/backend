import express from 'express';

import { 
    getAllProducts,
    createProducts,
    getAllProductsByID,
    updateProduct
} from '../controllers/Products.js';

const router = express.Router();

router.get('/',getAllProducts);
router.post('/',createProducts);
router.get('/:id',getAllProductsByID);
router.patch('/:id',updateProduct);

export default router;

