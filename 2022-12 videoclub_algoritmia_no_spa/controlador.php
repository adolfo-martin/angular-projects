<?php
header("Access-Control-Allow-Origin: *");
header ("Content-type: application/json; charset=utf-8"); 

if (!isset($_GET["accion"]) || $_GET["accion"]=="") {
	header('HTTP/ 400 Solicitud incorrecta');
    echo json_encode(array("estado" => "error", "tipo" => "Código de acción incorrecto"));
    exit();
}

if ($_GET["accion"]!="conseguir_generos" 
        && $_GET["accion"]!="conseguir_peliculas" 
        && $_GET["accion"]!="conseguir_persona") {
	header('HTTP/ 400 Solicitud incorrecta');
    echo json_encode(array("estado" => "error", "tipo" => "Código de acción incorrecto"));
    exit();
}


if ($_GET["accion"]=="conseguir_peliculas") {
    if (!isset($_GET["genero"]) || $_GET["genero"]=="") {
        header('HTTP/ 400 Solicitud incorrecta');
        echo json_encode(array("estado" => "error", "tipo" => "Falta el código de género"));
        exit();
    }
}

if ($_GET["accion"]=="conseguir_persona") {
    if (!isset($_GET["persona"]) || $_GET["persona"]=="") {
        header('HTTP/ 400 Solicitud incorrecta');
        echo json_encode(array("estado" => "error", "tipo" => "Falta el código de persona"));
        exit();
    }
}

require_once("./modelo.php");

if ($_GET["accion"]=="conseguir_generos") {
	$generos = conseguir_generos();
	if ($generos != null) {
	    header('HTTP/ 200 Géneros obtenidos');
	    echo json_encode(
            array(
                "estado" => "exito", 
                "operacion" => "conseguir_generos",
                "estado" => "exito",
                "base_datos" => "videoclub",
                "fecha" => "2012/12/17",
                "resultado" => array(
                    "tipo" => "array",
                    "propiedades" => 3,
                    "campo_informacion" => "generos",
                    "generos" => $generos
                )
            )
        );
	} else {
		header('HTTP/ 400 Géneros no obtenidos');
	    echo json_encode(array("estado" => "error", "tipo" => "Géneros no obtenidos"));
	}
	exit();
}

if ($_GET["accion"]=="conseguir_peliculas") {
    $peliculas = conseguir_peliculas_por_genero($_GET["genero"]);
    if ($peliculas != null) {
        header('HTTP/ 200 Películas obtenidas');
        echo json_encode(
            array(
                "estado" => "exito", 
                "operacion" => "conseguir_peliculas",
                "estado" => "exito",
                "base_datos" => "videoclub",
                "fecha" => "2012/12/17",
                "resultado" => array(
                    "tipo" => "objeto",
                    "propiedades" => 1,
                    "campo_informacion" => "peliculas",
                    "peliculas" => $peliculas
                )
            )
        );
    } else {
        header('HTTP/ 400 Películas no obtenidas');
        echo json_encode(array("estado" => "error", "tipo" => "Películas no obtenidas"));
    }
    exit();
}

if ($_GET["accion"]=="conseguir_persona") {
	$persona = conseguir_persona($_GET["persona"]);
	if ($persona != null) {
	    header('HTTP/ 200 Persona obtenida');
	    echo json_encode(
            array(
                "estado" => "exito", 
                "operacion" => "conseguir_persona",
                "estado" => "exito",
                "base_datos" => "videoclub",
                "fecha" => "2012/12/17",
                "resultado" => array(
                    "tipo" => "objeto",
                    "propiedades" => 2,
                    "campo_informacion" => "persona",
                    "persona" => $persona
                )
            )
        );
	} else {
		header('HTTP/ 400 Persona no obtenida');
	    echo json_encode(array("estado" => "error", "tipo" => "Persona no obtenida"));
	}
	exit();
}
?>
