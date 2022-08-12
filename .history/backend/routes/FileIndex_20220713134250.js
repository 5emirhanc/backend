import express from "express";

import {
    createProductsFile
} from "../controllers/File";

const router = express.Router();
router.post("/", createProductsFile);



export default router;
