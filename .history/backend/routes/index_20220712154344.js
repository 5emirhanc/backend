import express from "express";
import { Login } from "../controllers/Login.js";

import {
  getAllProducts,
  createProducts,
  getAllProductsByID,
  updateProduct,
  deleteProduct,
} from "../controllers/Products.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProducts);
router.post("/login", async (req, res) => {
  try {
    let foundUser = users.find((data) => req.body.email === data.email);
    if (foundUser) {
        res.json('yarak')
    }
  } catch {}
});
router.get("/:id", getAllProductsByID);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
