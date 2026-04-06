<?php
header("Access-Control-Allow-Origin: *");
header ("Content-type: application/json; charset=utf-8"); 

if (!isset($_GET["operacion"]) || $_GET["operacion"]=="") {
	header('HTTP/ 400 Solicitud incorrecta');
    echo json_encode(array("estado" => "error", "tipo" => "Código de operación incorrecto"));
    exit();
}

if ($_GET["operacion"]!="obtener-continentes" && $_GET["operacion"]!="obtener-geoformas" && $_GET["operacion"]!="obtener-tipos-geoformas" && $_GET["operacion"]!="obtener-geoforma") {
	header('HTTP/ 400 Solicitud incorrecta');
    echo json_encode(array("estado" => "error", "tipo" => "Código de operación incorrecto"));
    exit();
}

if ($_GET["operacion"]=="obtener-geoformas") {
 	if (!isset($_GET["continente"]) || $_GET["continente"]=="") {
		header('HTTP/ 400 Solicitud incorrecta');
	    echo json_encode(array("estado" => "error", "tipo" => "Falta el código de continente"));
	    exit();
	}
}

if ($_GET["operacion"]=="obtener-geoforma") {
 	if (!isset($_GET["geoforma"]) || $_GET["geoforma"]=="") {
		header('HTTP/ 400 Solicitud incorrecta');
	    echo json_encode(array("estado" => "error", "tipo" => "Falta el código de geoforma"));
	    exit();
	}
}

require_once("./modelo.php");

if ($_GET["operacion"]=="obtener-continentes") {
	$continentes = obtener_continentes();
	if ($continentes == null) {
		header('HTTP/ 400 Continentes no obtenidos');
	    echo json_encode(array("estado" => "error", "tipo" => "Continentes no obtenidos"));
		exit();
	}

	header('HTTP/ 200 Continentes obtenidos');
	echo json_encode(
		array(
			"estado" => "exito", 
			"accion" => "obtener-continentes",
			"estado" => "exito",
			"base_datos" => "geoformas",
			"fecha" => "2022/11/05",
			"resultado" => array(
				"tipo" => "array",
				"campo_informacion" => "continentes",
				"propiedades" => 2,
				"continentes" => $continentes
			)
		)
	);
	exit();
}

if ($_GET["operacion"]=="obtener-tipos-geoformas") {
	$tipos_geoformas = obtener_tipos_geoformas();
	if ($tipos_geoformas == null) {
		header('HTTP/ 400 Tipos de geoformas no obtenidos');
		echo json_encode(array("estado" => "error", "tipo" => "Tipos de geoformas no obtenidos"));
		exit();
	}

	header('HTTP/ 200 Tipos de geoformas obtenidos');
	echo json_encode(
		array(
			"estado" => "exito", 
			"accion" => "obtener-tipos-geoformas",
			"estado" => "exito",
			"base_datos" => "geoformas",
			"fecha" => "2022/11/05",
			"resultado" => array(
				"tipo" => "array",
				"campo_informacion" => "tipos_geoformas",
				"propiedades" => 2,
				"tipos_geoformas" => $tipos_geoformas
			)
		)
	);
	exit();
}

if ($_GET["operacion"]=="obtener-geoformas") {
	$geoformas = obtener_geoformas($_GET["continente"]);
	if ($geoformas == null) {
		header('HTTP/ 400 Geoformas no obtenidos');
	    echo json_encode(array("estado" => "error", "tipo" => "Geoformas no obtenidas"));
		exit();
	}

	header('HTTP/ 200 Geoformas obtenidas');
	echo json_encode(
		array(
			"estado" => "exito", 
			"accion" => "obtener-geoformas",
			"estado" => "exito",
			"base_datos" => "geoformas",
			"fecha" => "2022/11/05",
			"resultado" => array(
				"tipo" => "array",
				"campo_informacion" => "geoformas",
				"propiedades" => 2,
				"geoformas" => $geoformas
			)
		)
	);
	exit();
}

if ($_GET["operacion"]=="obtener-geoforma") {
	$geoforma = obtener_geoforma($_GET["geoforma"]);
	if ($geoforma == null) {
		header('HTTP/ 400 Geoforma no obtenida');
	    echo json_encode(array("estado" => "error", "tipo" => "Geoforma no obtenida"));
		exit();
	}

	header('HTTP/ 200 Geoforma obtenida');
	echo json_encode(
		array(
			"estado" => "exito", 
			"accion" => "obtener-geoforma",
			"estado" => "exito",
			"base_datos" => "geoformas",
			"fecha" => "2022/11/05",
			"resultado" => array(
				"tipo" => "array",
				"campo_informacion" => "geoforma",
				"propiedades" => 4,
				"geoforma" => $geoforma
			)
		)
	);
	exit();
}
?>
