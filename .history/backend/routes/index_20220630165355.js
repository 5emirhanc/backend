import express from 'express';

import { 
    getAllProducts,
    createProducts
} from '../controllers/Products.js';

const router = express.Router();

router.get('/',getAllProducts);
router.post('/',createProducts);

export default router;

