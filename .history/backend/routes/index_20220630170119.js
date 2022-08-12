import express from 'express';

import { 
    getAllProducts,
    createProducts,
    getAllProductsByID,
    updateProducts
} from '../controllers/Products.js';

const router = express.Router();

router.get('/',getAllProducts);
router.post('/',createProducts);
router.get('/:id',getAllProductsByID);
router.put('/:id',updateProducts);

export default router;

