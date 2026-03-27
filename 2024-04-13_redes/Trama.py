class Trama:

    def __init__(self, direccion_origen: str, direccion_destino: str, datos: str, crc: str) -> None:
        self.direccion_origen = direccion_origen
        self.direccion_destino = direccion_destino
        self.datos = datos
        self.crc = crc

    def es_valida(self) -> bool:
        return len(self.datos) == int(self.crc)