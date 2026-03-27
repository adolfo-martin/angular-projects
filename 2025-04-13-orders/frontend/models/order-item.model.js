/**
 * @typedef {Object} OrderItem
 * @property {number} id - The unique identifier for the order item.
 * @property {number} productId - The unique identifier for the product.
 * @property {number} quantity - The quantity of the product ordered.
 * @property {number} price - The price of the product.
 * @description Represents an item in an order.
 * This class is used to create and manage order items in an commerce application.
 */
export default class OrderItem {
    /**
     * @param { number } id 
     * @param { number } productId 
     * @param { number } quantity 
     * @param { number } price 
     */
    constructor(id, productId, quantity, price) {
        this.id = id;
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
    }
}