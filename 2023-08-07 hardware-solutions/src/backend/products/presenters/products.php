<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');
header('Access-Control-Allow-Methods: GET');

require_once __DIR__ . '/../products/infraestructure/ProductsRepository.php';
require_once __DIR__ . '/../../Config.php';


$productsRepository = Config::$productsRepository;

