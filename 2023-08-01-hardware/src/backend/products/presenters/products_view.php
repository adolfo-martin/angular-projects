<?php
error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE);

header("Content-type:text/html; charset=UTF-8");

require_once __DIR__ . "/ProductsRepositoryMysql.php";

try {
    $repository = new ProductsRepositoryMysql("10.0.0.3", "hardware_solutions", "Hola1234", "hardware_solutions");
    $products = $repository->retrieveProducts();
    echo "<h1>PRODUCTOS</h1>";
    echo '<table border="1">';

    foreach ($products as $product) {
        echo "<tr>";
        $name = $product["product_name"];
        echo "<td>$name</td>";
        echo "</tr>";
    }

    echo "</table>";
} catch (ProductsRepositoryMysqlException $e) {
    echo "<h1>ERROR</h1>";
    $message = $e->getMessage();
    echo "<h2>$message</h2>";
}