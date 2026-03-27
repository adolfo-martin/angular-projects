<?php
header ("Content-type: application/json; charset=utf-8"); 

require_once('jwt.php');

$fecha = new DateTime();
$fecha_expiracion = $fecha->modify('+6 hour');
$expira = $fecha_expiracion->getTimestamp();

$datos['usuario'] = 'adolfo';
$datos['curso'] = '1ESOA';
$datos['ip'] = '127.0.0.1';
$datos['expira'] = $expira;

$token = JWT::encode($datos, 'Hola1234');
// echo json_encode(['token' => $token])

$datos = JWT::decode($token, 'Hola1234', array('HS256'));

$fecha_actual = new DateTime();
$fecha_token = (new DateTime())->setTimestamp(1662729623);


echo json_encode(['actual' => $fecha_actual, 'expira' => $fecha_token]);
echo json_encode(['actual' => $fecha_actual->getTimestamp(), 'expira' => $fecha_token->getTimestamp()]);

// if ($fecha_actual > $datos->expira) {
//     header('HTTP/ 401 Sin autorización del servidor');
//     echo json_encode([
//         'estado' => 'error', 
//         'mensaje' => 'Token expirado', 
//         'resultado' => ['token' => null]
//     ]);
//     exit;
// }
?>