import express from "express";

import { fileProducts } from "../controllers/fileProduct.js";

const router = express.Router();


router.get("/file",fileProducts);


export default router;
