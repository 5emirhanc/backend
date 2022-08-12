import express from "express";

import { GetfileProducts } from "../controllers/fileProduct.js";

const router = express.Router();


router.get("/file",GetfileProducts);


export default router;
