import ProductModel from '../models/product.model.js';

export default class ProductController {
    constructor(model) {
        this.model = model;
    }

    async getAllProducts(req, res) {
        try {
            const products = await this.model.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await this.model.getProductById(id);
            
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            
            res.json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}