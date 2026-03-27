<?php
class Product implements JsonSerializable {

    protected int $id;
    protected string $name;
    protected string $description;
    protected float $standardCost;
    protected float $listPrice;
    protected int $categoryId;


    function __construct(
        $id,
        $name,
        $description = '',
        $standardCost = 0,
        $listPrice = 0,
        $categoryId = 0
    ) {
        $this->id = $id;
        $this->name = $name;
        $this->description = $description;
        $this->standardCost = $standardCost;
        $this->listPrice = $listPrice;
    }

    function getId() {
        return $this->id;
    }

    function getName() {
        return $this->name;
    }


    public function jsonSerialize() {
        return (object) get_object_vars($this);
    }
    
}