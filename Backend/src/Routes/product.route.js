import express from "express";
import {createProduct, DeletingProduct, getProductById, getProducts, ProductUpdating} from "../Controllers/product.controller.js";
import { validateProduct } from "../Middleware/product.validation.js";
const router = express.Router();


router.get('/products', getProducts);

router.post('/products', validateProduct, createProduct);

router.get('/products/:id', getProductById);

router.patch('/products/:id', validateProduct, ProductUpdating);

router.delete('/products/:id', DeletingProduct);


export default router



