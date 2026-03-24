from Equipo import Equipo
from PuntoAcceso import PuntoAcceso


punto_acceso = PuntoAcceso('wifi_adolfo', 'Hola1234')
equipo1 = Equipo('00:00:00:00:00:01')
equipo1.conectar_a_punto_de_acceso(punto_acceso, 'Hola1234')
print(punto_acceso.obtener_equipos_conectados())