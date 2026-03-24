from DireccionFisica import DireccionFisica
from DireccionLogica import DireccionLogica
from Equipo import Equipo


class CapaAccesoRed:

    def __init__(self) -> None:
        self.equipos: list[Equipo] = []


    def añadir_equipo(self, equipo: Equipo):
        self.equipos.append(equipo)


    def averiguar_direccion_fisica_mediante_multidifusion(self, direccionLogica: DireccionLogica) -> DireccionFisica | None:
        for equipo in self.equipos:
            if equipo.direccion_logica.direccion == direccionLogica.direccion:
                return equipo.direccion_fisica
            
        return None
