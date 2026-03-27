import os
from EquipoInalambrico import EquipoInalambrico
from PuntoAcceso import PuntoAcceso
from Trama import Trama

os.system('cls')

puntos_acceso: list[PuntoAcceso] = []
for i in range(1, 10):
    direccion = f'AA:AA:AA:AA:AA:0{i}'
    punto_acceso = PuntoAcceso(direccion, f'wifi_{i}', f'Hola{i}')
    puntos_acceso.append(punto_acceso)

punto_acceso_uno = puntos_acceso[0]

equipos: list[EquipoInalambrico] = []
for i in range(1, 10):
    direccion = f'EE:EE:EE:EE:EE:0{i}'
    equipo = EquipoInalambrico(f'ordenador{i}', direccion)
    equipos.append(equipo)

equipo_uno = equipos[0]
equipo_uno.conectar_a_wifi(punto_acceso_uno, 'Hola1')
print(punto_acceso_uno.equipos_conectados)

mensaje = f'tipo=enviar;mensaje=Probando la comunicación'
for i in puntos_acceso:
    trama = Trama(equipo_uno.direccion_fisica, punto_acceso.direccion_fisica, mensaje, str(len(mensaje)))
    punto_acceso.recibir(trama)


# direccion2 = DireccionFisica('AA:AA:AA:AA:AA:02')
# direccion3 = DireccionFisica('AA:AA:AA:AA:AA:03')

# equipo2 = EquipoInalambrico(direccion2)


# trama1 = Trama(direccion1, 'AA:AA:AA:AA:AA:02', 'mensaje', 'crc')