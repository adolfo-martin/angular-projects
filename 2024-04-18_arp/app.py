from CapaAccesoRed import CapaAccesoRed
from DireccionFisica import DireccionFisica
from DireccionLogica import DireccionLogica
from Equipo import Equipo


def main():
    capa_acceso_red = CapaAccesoRed()

    print('Los equipos en la red son:')
    for equipo in capa_acceso_red.equipos:
        print(equipo)


    equipo1 = Equipo(DireccionFisica('AA:AA:AA:AA:AA:01'), DireccionLogica('172.16.0.1'), capa_acceso_red)
    equipo2 = Equipo(DireccionFisica('AA:AA:AA:AA:AA:02'), DireccionLogica('172.16.0.2'), capa_acceso_red)
    equipo3 = Equipo(DireccionFisica('AA:AA:AA:AA:AA:03'), DireccionLogica('172.16.0.3'), capa_acceso_red)
    equipo4 = Equipo(DireccionFisica('AA:AA:AA:AA:AA:04'), DireccionLogica('172.16.0.4'), capa_acceso_red)
    equipo5 = Equipo(DireccionFisica('AA:AA:AA:AA:AA:05'), DireccionLogica('172.16.0.5'), capa_acceso_red)
    equipo6 = Equipo(DireccionFisica('AA:AA:AA:AA:AA:06'), DireccionLogica('172.16.0.6'), capa_acceso_red)
    equipo7 = Equipo(DireccionFisica('AA:AA:AA:AA:AA:07'), DireccionLogica('172.16.0.7'), capa_acceso_red)
    equipo8 = Equipo(DireccionFisica('AA:AA:AA:AA:AA:08'), DireccionLogica('172.16.0.8'), capa_acceso_red)
    equipo9 = Equipo(DireccionFisica('AA:AA:AA:AA:AA:09'), DireccionLogica('172.16.0.9'), capa_acceso_red)

    capa_acceso_red.añadir_equipo(equipo1)
    capa_acceso_red.añadir_equipo(equipo2)
    capa_acceso_red.añadir_equipo(equipo3)
    capa_acceso_red.añadir_equipo(equipo4)
    capa_acceso_red.añadir_equipo(equipo5)
    capa_acceso_red.añadir_equipo(equipo6)
    capa_acceso_red.añadir_equipo(equipo7)
    capa_acceso_red.añadir_equipo(equipo8)
    capa_acceso_red.añadir_equipo(equipo9)

    print('Los equipos en la red son:')
    for equipo in capa_acceso_red.equipos:
        print(equipo)

    equipo1.enviar_mensaje(DireccionLogica('172.16.0.2'), 'Hola')




if __name__ == '__main__':
    main()