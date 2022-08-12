import express from 'express';

import { 
    getAllProducts,
    createProducts,
    getAllProductsByID
} from '../controllers/Products.js';

const router = express.Router();

router.get('/',getAllProducts);
router.post('/',createProducts);
router.post('/',getAllProductsByID);

export default router;

