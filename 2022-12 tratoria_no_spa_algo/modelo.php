<?php

$pizzas = array(
    array("codigo" => "p01", "nombre" => "Margarita", "foto" => "pizza_margarita.jpg", "precio" => 7.50),
    array("codigo" => "p02", "nombre" => "Carbonara", "foto" => "pizza_carbonara.jpg", "precio" => 9.25),
    array("codigo" => "p03", "nombre" => "Barbacoa", "foto" => "pizza_barbacoa.jpg", "precio" => 8.75),
    array("codigo" => "p04", "nombre" => "Puttanesca", "foto" => "pizza_puttanesca.jpg", "precio" => 8.00),
    array("codigo" => "p05", "nombre" => "Romana", "foto" => "pizza_romana.jpg", "precio" => 7.75)
);

$ingredientes = array(
    array("codigo" => "i01", "nombre" => "Salsa de tomate", "foto" => "salsa_tomate.jpg"),
    array("codigo" => "i02", "nombre" => "Queso mozzarela", "foto" => "queso_mozzarela.jpg"),
    array("codigo" => "i03", "nombre" => "Jamón cocido", "foto" => "jamon_cocido.jpg"),
    array("codigo" => "i04", "nombre" => "Champiñones", "foto" => "champinones.jpg"),
    array("codigo" => "i05", "nombre" => "Aceitunas", "foto" => "aceitunas.jpg"),
    array("codigo" => "i06", "nombre" => "Bacón", "foto" => "bacon.jpg"),
    array("codigo" => "i07", "nombre" => "Carne picada", "foto" => "carne_picada.jpg"),
    array("codigo" => "i08", "nombre" => "Pimiento", "foto" => "pimiento.jpg"),
    array("codigo" => "i09", "nombre" => "Salami", "foto" => "salami.jpg"),
    array("codigo" => "i10", "nombre" => "Albahaca", "foto" => "albahaca.jpg"),
    array("codigo" => "i11", "nombre" => "Anchoas", "foto" => "anchoas.jpg"),
    array("codigo" => "i12", "nombre" => "Orégano", "foto" => "oregano.jpg"),
    array("codigo" => "i13", "nombre" => "Nata líquida", "foto" => "nata_liquida.jpg"),
    array("codigo" => "i14", "nombre" => "Salsa barbacoa", "foto" => "salsa_barbacoa.jpg"),
    array("codigo" => "i15", "nombre" => "Alcaparras", "foto" => "alcaparras.jpg")

);

$ingredientes_pizza = array(
    "p01" => array("i01", "i02", "i10"),
    "p02" => array("i02", "i06", "i13"),
    "p03" => array("i01", "i02", "i06", "i07", "i14"),
    "p04" => array("i01", "i02", "i05", "i11", "i15"),
    "p05" => array("i01", "i02", "i03", "i04", "i05", "i12")
);

//------------------------------------------------------------------------------
function recuperar_pizzas() {   
    global $pizzas;
    return $pizzas;
}

//------------------------------------------------------------------------------
function recuperar_ingredientes() {   
    global $ingredientes;
    $ingredientesAux = array();
    foreach ($ingredientes as $key => $value) {
        // $ingrediente = array("codigo" => $value["codigo"]);
        // $ingredientesAux[$key] = $ingrediente;
        $ingredientesAux[] = $value["codigo"];
    }
    return $ingredientesAux;
}

//------------------------------------------------------------------------------
function recuperar_ingrediente($ingrediente) {   
    global $ingredientes;
    foreach ($ingredientes as $key => $value) {
        if ($value["codigo"] == $ingrediente) {
            return $value;
        }
    }
    return null;
}

//------------------------------------------------------------------------------
function recuperar_ingredientes_pizza($pizza) {
    global $ingredientes_pizza;
    return $ingredientes_pizza[$pizza];
}

//------------------------------------------------------------------------------
?>