import express from 'express';
import ProductController from '../controllers/product.controller.js';

export default class ProductRouterBuilder {
    static build(controller) {
        const router = express.Router();
        router.get('/products', controller.getAllProducts.bind(controller));
        router.get('/products/:id', controller.getProductById.bind(controller));
        return router;
    }
}