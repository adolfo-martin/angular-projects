const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// Contacts routes
router.get('/contacts', controllers.getAllRecords('contacts'));
router.get('/contacts/:id', controllers.getRecordById('contacts', 'contact_id'));

// Countries routes
router.get('/countries', controllers.getAllRecords('countries'));
router.get('/countries/:id', controllers.getRecordById('countries', 'country_id'));

// Customers routes
router.get('/customers', controllers.getAllRecords('customers'));
router.get('/customers/:id', controllers.getRecordById('customers', 'customer_id'));

// Employees routes
router.get('/employees', controllers.getAllRecords('employees'));
router.get('/employees/:id', controllers.getRecordById('employees', 'employee_id'));

// Inventories routes
router.get('/inventories', controllers.getAllRecords('inventories'));
router.get('/inventories/:product_id/:warehouse_id', 
    controllers.getCompositeRecord('inventories', ['product_id', 'warehouse_id']));

// Locations routes
router.get('/locations', controllers.getAllRecords('locations'));
router.get('/locations/:id', controllers.getRecordById('locations', 'location_id'));

// Orders routes
router.get('/orders', controllers.getAllRecords('orders'));
router.get('/orders/:id', controllers.getRecordById('orders', 'order_id'));

// Order Items routes
router.get('/order-items', controllers.getAllRecords('order_items'));
router.get('/order-items/:order_id/:item_id',
    controllers.getCompositeRecord('order_items', ['order_id', 'item_id']));

// Products routes
router.get('/products', controllers.getAllRecords('products'));
router.get('/products/:id', controllers.getRecordById('products', 'product_id'));

// Product Categories routes
router.get('/product-categories', controllers.getAllRecords('product_categories'));
router.get('/product-categories/:id', controllers.getRecordById('product_categories', 'category_id'));

// Regions routes
router.get('/regions', controllers.getAllRecords('regions'));
router.get('/regions/:id', controllers.getRecordById('regions', 'region_id'));

// Warehouses routes
router.get('/warehouses', controllers.getAllRecords('warehouses'));
router.get('/warehouses/:id', controllers.getRecordById('warehouses', 'warehouse_id'));

module.exports = router;