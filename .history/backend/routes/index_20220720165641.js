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
  seatProduct,
} from "../controllers/Products.js";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/bead",beadProdut);
router.get("/kitchen",kitchenProduct);
router.get("/bead",seatProduct);
router.post("/", createProducts);
router.post("/login", Login);
router.get("/:id", getAllProductsByID);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
