from CapaAccesoRed import CapaAccesoRed
from Equipo import DestinoInalcanzableError, Equipo


capa_acceso_red = CapaAccesoRed()

equipo1 = Equipo('AA:AA:AA:AA:AA:01', '192.168.1.1')
equipo2 = Equipo('AA:AA:AA:AA:AA:02', '192.168.1.2')
equipo3 = Equipo('AA:AA:AA:AA:AA:03', '192.168.1.3')
equipo4 = Equipo('AA:AA:AA:AA:AA:04', '192.168.1.4')
equipo5 = Equipo('AA:AA:AA:AA:AA:05', '192.168.1.5')
equipo6 = Equipo('AA:AA:AA:AA:AA:06', '192.168.1.6')
equipo7 = Equipo('AA:AA:AA:AA:AA:07', '192.168.1.7')
equipo8 = Equipo('AA:AA:AA:AA:AA:08', '192.168.1.8')
equipo9 = Equipo('AA:AA:AA:AA:AA:09', '192.168.1.9')

equipos: list[Equipo] = [ equipo1, equipo2, equipo3, equipo4, equipo5, equipo6, equipo7, equipo8, equipo9 ]
for equipo in equipos:
    equipo.conectar_a_capa_acceso_red(capa_acceso_red)

try:
    equipo1.enviar('192.168.1.9', 'Hola, estoy enviando al nueve.')
except DestinoInalcanzableError as error:
    print(error)