class DireccionMac:

    def __init__(self, direccion: str) -> None:
        self.__direccion = direccion

    @property
    def direccionMac(self):
        return self.__direccion
    
    @direccionMac.setter
    def setter_direccion(self, valor: str):
        self.__direccion = valor

    def __repr__(self) -> str:
        return f"Dirección: {DireccionMac}"
    
    def __eq__(self):
        return self.__direccion == self.__direccion
    
    def es_direccion_correcta(direccion: str) -> bool:
        if len(direccion) != 17:
            return False
        return True
    
    class DireccionMacError(Exception):
        pass