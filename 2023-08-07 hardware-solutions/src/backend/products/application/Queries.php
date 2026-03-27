<?php

require_once __DIR__ . '/../../cqrs.php';


class RetrieveProductsQuery extends Query {
}


class RetrieveProductByIdQuery extends Query {
    public int $id;
}


class ProductProjection {

    public function __construct(productRepository $repository) {
        $this->repository = $repository;
    }

    public function handle(object $query) {
        $name = $this->getClassName($query);
        if ($name == 'RetrieveProductsQuery') {

        } else if ($name == 'RetrieveProductByIdQuery') {
        }
    }


    private function getClassName(object $object): string {
        $class_parts = explode('\\', get_class($object));
        echo end($class_parts);
    }
}