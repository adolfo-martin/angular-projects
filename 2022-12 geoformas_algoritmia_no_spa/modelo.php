<?php

$continentes = array(
    array("clave" => "eu", "nombre" => "Europa"),
    array("clave" => "am", "nombre" => "América"),
    array("clave" => "as", "nombre" => "Asia"),
    array("clave" => "af", "nombre" => "África"),
    array("clave" => "oc", "nombre" => "Oceania"),
    array("clave" => "an", "nombre" => "Antártida")  
);

$tipos_geoformas = array(
    array("clave" => "ri", "denominacion" => "Rio"),
    array("clave" => "mo", "denominacion" => "Montaña")  
);

$geoformas = array(
    "eu" => array(
        array("clave" => "eu01", "nombre" => "Montblanc", "tipo" => "mo", "altitud" => 4809),
        array("clave" => "eu02", "nombre" => "Rinh", "tipo" => "ri", "longitud" => 1233),
        array("clave" => "eu03", "nombre" => "Tajo", "tipo" => "ri", "longitud" => 1007),
        array("clave" => "eu04", "nombre" => "Támesis", "tipo" => "ri", "longitud" => 346),
        array("clave" => "eu05", "nombre" => "Rodano", "tipo" => "ri", "longitud" => 814),
        array("clave" => "eu06", "nombre" => "Mulhacen", "tipo" => "mo", "altitud" => 3479),
        array("clave" => "eu07", "nombre" => "Elbrús", "tipo" => "mo", "altitud" => 5642)
    ),
    "am" => array(
        array("clave" => "am01", "nombre" => "Amazonas", "tipo" => "ri", "longitud" => 6992),
        array("clave" => "am02", "nombre" => "Denali", "tipo" => "mo", "altitud" => 6190),
        array("clave" => "am03", "nombre" => "Missisipi", "tipo" => "ri", "longitud" => 3766),
        array("clave" => "am04", "nombre" => "Aconcagua", "tipo" => "ri", "longitud" => 142),
        array("clave" => "am05", "nombre" => "Orinoco", "tipo" => "ri", "longitud" => 2250),
        array("clave" => "am06", "nombre" => "San Lorenzo", "tipo" => "ri", "longitud" => 1197),
        array("clave" => "am07", "nombre" => "Yukón", "tipo" => "ri", "longitud" => 3190),
        array("clave" => "am08", "nombre" => "Alpamayo", "tipo" => "mo", "altitud" => 5947)
    ),
    "as" => array(
        array("clave" => "as01", "nombre" => "Everest", "tipo" => "mo", "altitud" => 8849),
        array("clave" => "as02", "nombre" => "Yangtsé", "tipo" => "ri", "longitud" => 6300),
        array("clave" => "as03", "nombre" => "Ganges", "tipo" => "ri", "longitud" => 2510),
        array("clave" => "as04", "nombre" => "Lhotse", "tipo" => "mo", "altitud" => 8516),
        array("clave" => "as05", "nombre" => "Éufrates", "tipo" => "ri", "longitud" => 2780),
        array("clave" => "as06", "nombre" => "K2", "tipo" => "mo", "altitud" => 8611)
    ),
    "af" => array(
        array("clave" => "af01", "nombre" => "Nilo", "tipo" => "ri", "longitud" => 6650),
        array("clave" => "af02", "nombre" => "Kilimanjaro", "tipo" => "mo", "altitud" => 5895),
        array("clave" => "af03", "nombre" => "Monte Stanley", "tipo" => "mo", "altitud" => 5109),
        array("clave" => "af04", "nombre" => "Zambeze", "tipo" => "ri", "longitud" => 2574),
        array("clave" => "af05", "nombre" => "Logone", "tipo" => "ri", "longitud" => 950),
        array("clave" => "af06", "nombre" => "Karisimbi", "tipo" => "mo", "altitud" => 4507),
        array("clave" => "af07", "nombre" => "Okavango", "tipo" => "ri", "longitud" => 1700)
    ),
    "oc" => array(
        array("clave" => "oc01", "nombre" => "Jaya", "tipo" => "mo", "altitud" => 4884),
        array("clave" => "oc02", "nombre" => "Wilhelm", "tipo" => "mo", "altitud" => 4509),
        array("clave" => "oc03", "nombre" => "Darling", "tipo" => "ri", "longitud" => 1472),
        array("clave" => "oc04", "nombre" => "Murrumbidgee", "tipo" => "ri", "longitud" => 1485),
        array("clave" => "oc05", "nombre" => "Giluwe", "tipo" => "mo", "altitud" => 4367)
    ),
    "an" => array(
        array("clave" => "an01", "nombre" => "Vinson", "tipo" => "mo", "altitud" => 4892),
        array("clave" => "an02", "nombre" => "Onyx", "tipo" => "ri", "longitud" => 32),
        array("clave" => "an03", "nombre" => "Erebus", "tipo" => "mo", "altitud" => 3794)
    )
);

//------------------------------------------------------------------------------
function obtener_continentes() {    
    global $continentes;
    return $continentes;
}

//------------------------------------------------------------------------------
function obtener_geoformas($continente) {
    global $geoformas;

    if (!array_key_exists($continente, $geoformas)) {
        return null;
    }

    $resultado = array();
    foreach ($geoformas[$continente] as $key => $value) {
        array_push($resultado, array("clave" => $value["clave"], "nombre" => $value["nombre"]));
    }

    return $resultado;
}

//------------------------------------------------------------------------------
function obtener_tipos_geoformas() {    
    global $tipos_geoformas;
    return $tipos_geoformas;
}

//------------------------------------------------------------------------------
function obtener_geoforma($geoforma) {
    global $geoformas;                

    foreach ($geoformas as $key_continentes => $value_continentes) {
        foreach ($value_continentes as $key => $value) {
            if ($value["clave"] == $geoforma)
                return $value;
        }
    }

    return null;
}
//------------------------------------------------------------------------------
?>
