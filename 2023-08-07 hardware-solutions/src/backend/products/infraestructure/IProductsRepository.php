<?php
// use \..\domain\Product;

require_once __DIR__ . "/../domain/Product.php";


interface IProductsRepository {

    public function retrieveProducts(); // : Array<Product>;
}