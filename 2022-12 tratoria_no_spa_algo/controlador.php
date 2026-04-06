<?php
header("Access-Control-Allow-Origin: *");
header ("Content-type: application/json; charset=utf-8"); 

if (!isset($_GET["operacion"]) || $_GET["operacion"]=="") {
	header('HTTP/ 400 Solicitud incorrecta');
    echo json_encode(array("estado" => "error", "tipo" => "Código de operación incorrecto"));
    exit();
}

if ($_GET["operacion"]!="recuperar_pizzas" && $_GET["operacion"]!="recuperar_ingredientes" 
        && $_GET["operacion"]!="recuperar_ingredientes_todos" && $_GET["operacion"]!="recuperar_ingrediente") {
	header('HTTP/ 400 Solicitud incorrecta');
    echo json_encode(array("estado" => "error", "tipo" => "Código de operación incorrecto"));
    exit();
}

if ($_GET["operacion"]=="recuperar_ingredientes") {
 	if (!isset($_GET["pizza"]) || $_GET["pizza"]=="") {
		header('HTTP/ 400 Solicitud incorrecta');
	    echo json_encode(array("estado" => "error", "tipo" => "Falta el código de pizza"));
	    exit();
	}
}

if ($_GET["operacion"]=="recuperar_ingrediente") {
    if (!isset($_GET["ingrediente"]) || $_GET["ingrediente"]=="") {
        header('HTTP/ 400 Solicitud incorrecta');
        echo json_encode(array("estado" => "error", "tipo" => "Falta el código de ingrediente"));
        exit();
    }
}

require_once("./modelo.php");

if ($_GET["operacion"]=="recuperar_pizzas") {
	$pizzas = recuperar_pizzas();
	if ($pizzas != null) {
	    header('HTTP/ 200 Pizzas obtenidas');
	    echo json_encode(
            array(
                "estado" => "exito", 
                "operacion" => "recuperar_pizzas",
                "estado" => "exito",
                "base_datos" => "tratoria",
                "fecha" => "2022/12/06",
                "resultado" => array(
                    "tipo" => "array",
                    "elementos" => 5,
                    "propiedades" => 4,
                    "campo_informacion" => "pizzas",
                    "pizzas" => $pizzas
                )
            )
        );
	} else {
		header('HTTP/ 400 Pizzas no obtenidos');
	    echo json_encode(array("estado" => "error", "tipo" => "Pizzas no obtenidas"));
	}
	exit();
}

if ($_GET["operacion"]=="recuperar_ingredientes") {
	$ingredientes = recuperar_ingredientes_pizza($_GET["pizza"]);
	if ($ingredientes != null) {
	    header('HTTP/ 200 Ingredientes de pizza obtenidos');
	    echo json_encode(
            array(
                "estado" => "exito", 
                "operacion" => "recuperar_ingredientes",
                "estado" => "exito",
                "base_datos" => "tratoria",
                "fecha" => "2022/12/06",
                "resultado" => array(
                    "tipo" => "array",
                    "elementos" => 22,
                    "propiedades" => 2,
                    "campo_informacion" => "ingredientes", 
                    "ingredientes" => $ingredientes
                )
            )
        );
	} else {
		header('HTTP/ 400 IngredientesPizza no obtenidos');
	    echo json_encode(array("estado" => "error", "tipo" => "Ingredientes de pizza no obtenidos"));
	}
	exit();
}

if ($_GET["operacion"]=="recuperar_ingredientes_todos") {
	$ingredientes = recuperar_ingredientes();
	if ($ingredientes != null) {
	    header('HTTP/ 200 Ingredientes obtenidos');
	    echo json_encode(
            array(
                "estado" => "exito", 
                "operacion" => "recuperar_ingredientes_todos",
                "estado" => "exito",
                "base_datos" => "tratoria",
                "fecha" => "2022/12/06",
                "resultado" => array(
                    "tipo" => "array",
                    "elementos" => 15,
                    "propiedades" => 3,
                    "campo_informacion" => "ingredientes",  
                    "ingredientes" => $ingredientes
                )
            )
        );
	} else {
		header('HTTP/ 400 Ingredientes no obtenidos');
	    echo json_encode(array("estado" => "error", "tipo" => "Ingredientes no obtenidos"));
	}
	exit();
}

if ($_GET["operacion"]=="recuperar_ingrediente") {
    $ingrediente = recuperar_ingrediente($_GET["ingrediente"]);
    if ($ingrediente != null) {
        header('HTTP/ 200 Ingrediente obtenido');
        echo json_encode(
            array(
                "estado" => "exito", 
                "operacion" => "recuperar_ingrediente",
                "estado" => "exito",
                "base_datos" => "tratoria",
                "fecha" => "2022/12/06",
                "resultado" => array(
                    "tipo" => "objeto",
                    "elementos" => 1,
                    "propiedades" => 3,
                    "campo_informacion" => "ingrediente",  
                    "ingrediente" => $ingrediente
                )
            )
        );
    } else {
        header('HTTP/ 400 Ingrediente no obtenido');
        echo json_encode(array("estado" => "error", "tipo" => "Ingrediente no obtenido"));
    }
    exit();
}
?>
