class Trama:
    TAMAÑO_MINIMO_DATOS: int = 46
    TAMAÑO_MAXIMO_DATOS: int = 1500
    PREAMBULO: bytes = 0b10101010101010101010101010101010101010101010101010101010
    DELIMITADOR_INICIO_TRAMA: bytes = 0b10101011

    def __init__(self, mac_origen: str, mac_destino: str, datos: bytes) -> None:
        self.preambulo = Trama.PREAMBULO
        self.delimitador_inicio_trama = Trama.DELIMITADOR_INICIO_TRAMA
        self.mac_origen = mac_origen
        self.mac_destino = mac_destino
        self.datos = datos
        self.codigo_redundancia_ciclica = 'CRC'


    def __repr__(self) -> str:
        return f'[Trama] ({self.preambulo}) ({self.delimitador_inicio_trama}) ({self.mac_origen}) ({self.mac_destino}) (DATOS) ({self.codigo_redundancia_ciclica})'