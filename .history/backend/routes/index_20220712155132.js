import express from "express";
import { Login } from "../controllers/Login.js";

import {
  getAllProducts,
  createProducts,
  getAllProductsByID,
  updateProduct,
  deleteProduct,
} from "../controllers/Products.js";
import Products from "../models/productModel.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProducts);
router.post("/login",Login);
router.get("/:id", getAllProductsByID);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
