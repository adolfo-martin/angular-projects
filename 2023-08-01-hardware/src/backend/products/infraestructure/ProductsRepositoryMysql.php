<?php

require_once __DIR__ . "/../domain/Product.php";

class ProductsRepositoryMysql {

    private $connection;
    private $servername;
    private $username;
    private $password;
    private $database;
    
    
    public function __construct($servername, $username, $password, $database) {
        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;
    }
    

    private function openConnection() {
        $connection = new mysqli($this->servername, $this->username, $this->password, $this->database);
        
        if ($connection->connect_error) {
          throw new ProductsRepositoryMysqlException("Connection failed: " . $connection->connect_error);
        }

        $this->connection = $connection;
    }


    private function closeConnection() {
        $this->connection.close();
    }


    public function retrieveProducts() {
        $this->openConnection();
        $products = array();

        $sql = "SELECT product_id, product_name FROM products";
        $result = $this->connection->query($sql);
        // $this->closeConnection();

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $product = new Product(
                    intval($row['product_id']),
                    $row['product_name']
                );
                array_push($products, $product);
            }
        }

        return $products;    
    }


    public function retrieveProductById($id) {
        $this->openConnection();
        $product = array();

        $sql = "
            SELECT product_id, product_name, description, standard_cost, list_price 
            FROM products
            WHERE product_id = $id    
        ";
        $result = $this->connection->query($sql);
        // $this->closeConnection();

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                array_push($product, $row);
            }
        }

        return $product;
    }

}


class ProductsRepositoryMysqlException extends Exception {
}