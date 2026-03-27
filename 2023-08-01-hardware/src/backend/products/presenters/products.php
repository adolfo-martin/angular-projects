<?php
error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);

header("Access-Control-Allow-Origin: *");
header("Content-type:application/json; charset=UTF-8");

require_once __DIR__ . "/../infraestructure/ProductsRepositoryMysql.php";

try {
    $repository = new ProductsRepositoryMysql("10.0.0.3", "hardware_solutions", "Hola1234", "hardware_solutions");
    $products = $repository->retrieveProducts();
    http_response_code(200);
    
    echo json_encode(array(
        "ok" => true, 
        "products" => array_map(
            fn($product) => array("id" => $product->getId(), "name" => $product->getName()),
            $products
        )
    ));
} catch (ProductsRepositoryMysqlException $e) {
    http_response_code(400);
    echo json_encode(array(
        "ok" => false, 
        "message" => $e->getMessage()
    ));
}