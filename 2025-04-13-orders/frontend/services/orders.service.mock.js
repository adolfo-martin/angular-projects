import Customer from '../models/customer.model.js';
import Order from '../models/order.model.js';
import OrderItem from '../models/order-item.model.js';
import Product from '../models/product.model.js';

export default class OrderServiceMock {

    #customers = [
        new Customer(1, "John Smith", "john.smith@email.com", "555-0101", "123 Main St, New York, NY 10001"),
        new Customer(2, "Maria Garcia", "maria.g@email.com", "555-0102", "456 Park Ave, Los Angeles, CA 90001"),
        new Customer(3, "David Wilson", "d.wilson@email.com", "555-0103", "789 Oak Rd, Chicago, IL 60601"),
        new Customer(4, "Sarah Johnson", "sarah.j@email.com", "555-0104", "321 Pine St, Houston, TX 77001"),
        new Customer(5, "James Chen", "james.chen@email.com", "555-0105", "654 Maple Dr, Seattle, WA 98101"),
        new Customer(6, "Emma Davis", "emma.d@email.com", "555-0106", "987 Cedar Ln, Boston, MA 02108"),
        new Customer(7, "Michael Brown", "m.brown@email.com", "555-0107", "147 Elm St, Miami, FL 33101"),
        new Customer(8, "Lisa Anderson", "l.anderson@email.com", "555-0108", "258 Birch Ave, Denver, CO 80201"),
        new Customer(9, "Robert Taylor", "r.taylor@email.com", "555-0109", "369 Willow Rd, Portland, OR 97201"),
        new Customer(10, "Sofia Martinez", "s.martinez@email.com", "555-0110", "741 Ash St, Austin, TX 78701")
    ];

    /**
     * @typedef {Array<Product>} 
     */
    #products = [
        new Product(1, "Laptop", "High performance laptop", 1200, "https://example.com/laptop.jpg"),
        new Product(2, "Smartphone", "Latest model smartphone", 800, "https://example.com/smartphone.jpg"),
        new Product(3, "Headphones", "Noise-cancelling headphones", 200, "https://example.com/headphones.jpg"),
        new Product(4, "Smartwatch", "Feature-rich smartwatch", 300, "https://example.com/smartwatch.jpg"),
        new Product(5, "Tablet", "Portable tablet device", 500, "https://example.com/tablet.jpg"),
        new Product(6, "Wireless Mouse", "Ergonomic wireless mouse", 50, "https://example.com/mouse.jpg"),
        new Product(7, "Keyboard", "Mechanical gaming keyboard", 150, "https://example.com/keyboard.jpg"),
        new Product(8, "Monitor", "27-inch 4K display", 400, "https://example.com/monitor.jpg"),
        new Product(9, "Webcam", "HD webcam with microphone", 80, "https://example.com/webcam.jpg"),
        new Product(10, "External SSD", "1TB portable SSD drive", 120, "https://example.com/ssd.jpg")
    ];

    /**
     * @type {Array<Order>}
     */
    #orders = [
        new Order(1, 1, 'pending', [1, 2, 3]),
        new Order(2, 2, 'shipped', [4, 5]),
        new Order(3, 3, 'delivered', [6, 7, 8, 9]),
    ];

    #orderItems = [
        new OrderItem(1, 1, 1, 2),
        new OrderItem(2, 1, 2, 1),
        new OrderItem(3, 2, 4, 1),
        new OrderItem(4, 3, 6, 3),
        new OrderItem(5, 7, 7, 2),
        new OrderItem(6, 6, 4, 2.5),
        new OrderItem(7, 9, 3, 7.25),
        new OrderItem(8, 2, 2, 8.05),
        new OrderItem(9, 4, 1, 1.75),
    ];

    /**
     * @description Mock function to simulate fetching an order by ID.
     * @async
     * @function getOrderById
     * @param {number} orderId - The unique identifier for the order.
     * @returns {Promise<Order>} A promise that resolves to an order object.
     * @throws {Error} If the order is not found.
     */
    async getOrderById(orderId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const order = this.#orders.find(order => order.id === orderId);
                resolve(order);
            }, 1000);
        });
    }

    /**
     * @description Mock function to simulate fetching all orders.
     * @async
     * @function getCustomerById
     * @param {number} customerId - The unique identifier for the customer.
     * @returns {Promise<Customer>} A promise that resolves to an customer objects.
     */
    async getCustomerById(customerId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const customer = this.#customers.find(customer => customer.id === customerId);
                resolve(customer);
            }, 1000);
        });
    }

    /**
     * Mock function to simulate fetching an order item.
     * @param {number} orderItemId - The unique identifier for the order item.
     * @returns {Promise<OrderItem>} A promise that resolves to an order item object.
     */
    async getOrderItemById(orderItemId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const orderItem = this.#orderItems.find(orderItem => orderItem.id === orderItemId);
                resolve(orderItem);
            }, 1000);
        });
    }


    /**
     * Mock function to simulate fetching all products.
     * @async
     * @function getProductById
     * @param {number} productId 
     * @returns {Promise<Product>} A promise that resolves to an array of product objects.
     */
    async getProductById(productId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const product = this.#products.find(product => product.id === productId);
                resolve(product);
            }, 1000);
        });
    }

}