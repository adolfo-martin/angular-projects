import express from 'express';
import cors from 'cors';
import ProductController from './controllers/product.controller.js';
import ProductModel from './models/product.model.js';
import ProductRoutes from './routes/product.routes.js';
import MySQLProductRepository from './repositories/MySQLProductRepository.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const repository = new MySQLProductRepository();
const model = new ProductModel(repository);
const controller = new ProductController(model);

app.use('/api', ProductRoutes.build(controller));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});