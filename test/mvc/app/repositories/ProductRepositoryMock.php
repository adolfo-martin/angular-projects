<?php
require_once __DIR__ . '/../models/Product.php';

class ProductRespositoryMock {
    
    private static $products = null;

    public function __construct__() {
        if (self::$products == null) {
            self::$products = [
                new Product(1, 'Product 1', 100),
                new Product(2, 'Product 2', 200),
                new Product(3, 'Product 3', 300),
                new Product(4, 'Product 4', 400),
                new Product(5, 'Product 5', 500),
                new Product(6, 'Product 6', 600),
                new Product(7, 'Product 7', 700),
                new Product(8, 'Product 8', 800),
                new Product(9, 'Product 9', 900),
                new Product(10, 'Product 10', 1000),
            ];
        }
    }

    public function getProducts() {
        return self::$products;
    }
}
