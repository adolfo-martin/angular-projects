import MySQLProductRepository from '../repositories/MySQLProductRepository.js';

/**
 * Product model class that handles business logic for products
 */
export default class ProductModel {
    /**
     * @param {MySQLProductRepository} repository - Product repository instance
     */
    constructor(repository) {
        this.repository = repository;
    }

    async getAllProducts() {
        try {
            return await this.repository.findAll();
        } catch (error) {
            throw error;
        }
    }

    async getProductById(id) {
        try {
            return await this.repository.findById(id);
        } catch (error) {
            throw error;
        }
    }
}

// Create a single instance of the repository and model
// const productRepository = new MySQLProductRepository();
// export default new ProductModel(productRepository);