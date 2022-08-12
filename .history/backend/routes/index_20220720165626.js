import express from "express";
import { Login } from "../controllers/Login.js";
import {
  getAllProducts,
  createProducts,
  getAllProductsByID,
  updateProduct,
  deleteProduct,
  beadProdut,
  kitchenProduct,
} from "../controllers/Products.js";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/bead",beadProdut);
router.get("/bead",kitchenProduct);
router.post("/", createProducts);
router.post("/login", Login);
router.get("/:id", getAllProductsByID);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
