import db from '../config/database.js';
import { Product } from '../models/Product.js';

/**
 * Repository class for handling product-related database operations with MySQL
 * @class MySQLProductRepository
 */
export default class MySQLProductRepository {
    /**
     * Retrieves all products from the database
     * @async
     * @returns {Promise<Product[]>} Array of Product instances
     * @throws {Error} If there's an error fetching products
     */
    async findAll() {
        try {
            const [rows] = await db.query('SELECT * FROM products');
            console.log(rows);
            // return rows.map(row => Product.fromRow(row));
            return rows.map(row => new Product(
                row.product_id,
                row.product_name,
                row.description,
                row.standard_cost,
                row.list_price,
                row.category_id
            ));
        } catch (error) {
            throw new Error(`Error fetching products: ${error.message}`);
        }
    }

    /**
     * Retrieves a single product by its ID
     * @async
     * @param {number} id - The product ID to search for
     * @returns {Promise<Product|null>} Product instance if found, null otherwise
     * @throws {Error} If there's an error fetching the product
     */
    async findById(id) {
        try {
            const [rows] = await db.query('SELECT * FROM products WHERE product_id = ?', [id]);
            return rows[0] ? Product.fromRow(rows[0]) : null;
        } catch (error) {
            throw new Error(`Error fetching product ${id}: ${error.message}`);
        }
    }

    /**
     * Creates a new product in the database
     * @async
     * @param {Product} product - The product instance to create
     * @returns {Promise<Product>} The created product with its new ID
     * @throws {Error} If there's an error creating the product
     */
    async create(product) {
        try {
            const [result] = await db.query(
                'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)',
                [product.name, product.description, product.price, product.stock]
            );
            return this.findById(result.insertId);
        } catch (error) {
            throw new Error(`Error creating product: ${error.message}`);
        }
    }

    /**
     * Updates an existing product in the database
     * @async
     * @param {number} id - The ID of the product to update
     * @param {Product} product - The product instance with updated values
     * @returns {Promise<Product>} The updated product
     * @throws {Error} If there's an error updating the product
     */
    async update(id, product) {
        try {
            await db.query(
                'UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE product_id = ?',
                [product.name, product.description, product.price, product.stock, id]
            );
            return this.findById(id);
        } catch (error) {
            throw new Error(`Error updating product ${id}: ${error.message}`);
        }
    }

    /**
     * Deletes a product from the database
     * @async
     * @param {number} id - The ID of the product to delete
     * @returns {Promise<boolean>} True if product was deleted, false otherwise
     * @throws {Error} If there's an error deleting the product
     */
    async delete(id) {
        try {
            const [result] = await db.query('DELETE FROM products WHERE product_id = ?', [id]);
            return result.affectedRows > 0;
        } catch (error) {
            throw new Error(`Error deleting product ${id}: ${error.message}`);
        }
    }
}