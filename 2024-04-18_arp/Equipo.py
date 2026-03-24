from DireccionFisica import DireccionFisica
from DireccionLogica import DireccionLogica
from typing import Protocol


class CapaAccesoRedP(Protocol):
    def averiguar_direccion_fisica_mediante_multidifusion(self, direccionLogica: DireccionLogica) -> DireccionFisica | None: ...


class Equipo:

    def __init__(self, direccion_fisica: DireccionFisica, direccion_logica: DireccionLogica, capa_acceso_red: CapaAccesoRedP) -> None:
        self.direccion_fisica = direccion_fisica
        self.direccion_logica = direccion_logica
        self.capa_acceso_red = capa_acceso_red
        self.direcciones_almacenadas_por_arp: dict[DireccionLogica, DireccionFisica] = {}


    def enviar_mensaje(self, direccion_logica_destino: DireccionLogica, mensaje: str):
        direccion_fisica_destino = self.obtener_direccion_fisica_almacenada_localmente(direccion_logica_destino)
        if direccion_fisica_destino is None:
            direccion_fisica_destino = self.obtener_direccion_fisica_por_multidifusion(direccion_logica_destino)

        if direccion_fisica_destino is None:
            raise EquipoError('No se ha podido encontrar empleando el protocolo ARP la dirección física correspondiente a una dirección lógica.')

        print(f'Mensaje "{mensaje}" enviado desde {self.direccion_fisica.direccion} a {direccion_fisica_destino.direccion}')


    def obtener_direccion_fisica_almacenada_localmente(self, direccion_logica: DireccionLogica) -> DireccionFisica | None:
        return self.direcciones_almacenadas_por_arp.get(direccion_logica)
    

    def obtener_direccion_fisica_por_multidifusion(self, direccion_logica: DireccionLogica) -> DireccionFisica | None:
        return self.capa_acceso_red.averiguar_direccion_fisica_mediante_multidifusion(direccion_logica)


    def __repr__(self) -> str:
        return f'[Equipo] ({self.direccion_logica.direccion}) ({self.direccion_fisica.direccion})'



class EquipoError(Exception):
    ...