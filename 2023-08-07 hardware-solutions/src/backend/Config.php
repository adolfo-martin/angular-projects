<?php

require_once __DIR__ . '/../products/infraestructure/ProductsRepository.php';

class Config {
    public static ProductsRepository $productsRepository;

    public function __construct() {
        if (self::$productsRepository == null) {
            self::$productsRepository = new ProductsRepository();
        }
    }
}