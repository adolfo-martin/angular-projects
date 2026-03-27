/**
 * @module Order
 * @description Order model for managing order data and operations.
 * This class is used to create and manage orders in an e-commerce application.
 * It contains properties and methods for order management.
 * @type {Order}
 * @property {number} id - The unique identifier for the order.
 * @property {number} customerId - The unique identifier for the customer.
 * @property {number} status - The status of the order (e.g., pending, completed).
 * @property {Array<number>} items - The list of items in the order.
 */
export default class Order {

    /**
     * @type {Order} 
     * @param { number } id 
     * @param { number } customerId 
     * @param { number } status 
     * @param { Array<number> } items
     */
    constructor(id, customerId, status, items) {
        this.id = id;
        this.customerId = customerId;
        this.status = status;
        this.items = items;
    }

    addItem(item) {
        this.items.push(item);
        this.calculateTotal();
    }

    calculateTotal() {
        this.totalAmount = this.items.reduce((total, item) => total + item.price, 0);
    }

    setStatus(status) {
        this.status = status;
    }
}