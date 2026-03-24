from PuntoAccesoProtocol import PuntoAccesoProtocol


class Equipo:

    def __init__(self, direccion_fisica: str) -> None:
        self.direccion_fisica = direccion_fisica

    def conectar_a_punto_de_acceso(self, punto_acceso: PuntoAccesoProtocol, contraseña: str):
        punto_acceso.conectar(self.direccion_fisica, contraseña)