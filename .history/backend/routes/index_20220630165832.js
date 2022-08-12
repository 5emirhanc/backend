import express from 'express';

import { 
    getAllProducts,
    createProducts,
    getAllProductsByID
} from '../controllers/Products.js';

const router = express.Router();

router.get('/',getAllProducts);
router.post('/',createProducts);
router.get('/:id',getAllProductsByID);

export default router;

