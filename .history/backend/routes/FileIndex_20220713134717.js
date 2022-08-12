import express from "express";

import {
    createProductsFile
} from "../controllers/File";

const router = express.Router();
router.post("/product_file", createProductsFile);



export default router;
