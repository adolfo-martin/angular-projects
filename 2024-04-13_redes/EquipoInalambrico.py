from typing import Protocol

from Trama import Trama


class PuntoAccesoP(Protocol):
    def recibir(self, trama: Trama): ...
    @property
    def ssid(self) -> str: ...
    @property
    def direccion_fisica(self) -> str: ...


class EquipoInalambrico:

    def __init__(self, nombre: str, direccion_fisica: str) -> None:
        self.nombre = nombre
        self.direccion_fisica = direccion_fisica


    def conectar_a_wifi(self, punto_acceso: PuntoAccesoP, contraseña: str):
        mensaje = f'tipo=conectar;ssid={punto_acceso.ssid};contraseña={contraseña}'
        trama = Trama(self.direccion_fisica, punto_acceso.direccion_fisica, mensaje, str(len(mensaje)))
        punto_acceso.recibir(trama)