from typing import Protocol

class PuntoAccesoProtocol(Protocol):
    def conectar(self, direccion_fisica: str, contraseña: str) -> None:
        raise Exception('El método conectar no está implementado.')