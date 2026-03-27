<?php

require_once __DIR__ . "/Product.php";

class ProductsRepositoryMock implements IProductsRepository {

    private static $products;
    
    
    public function __construct() {
        if (self::$products === null) {
            self::$products = self::setupProducts();
        }
    }


    private static function setupProducts() {
        return array(
            new Product(1, "Keyboard Logitech", "Keyboard Logitech color black", 15.50, 19.90),
            new Product(2, "Mouse Logitech", "Mouse Logitech color black", 12.25, 16.50),
        );
    }


    public function retrieveProducts() {
        return self::$products;
    }
}