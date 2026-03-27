class DireccionMac:
    def __init__(self, direccion: str) -> None:
        if not DireccionMac.es_direccion_correcta(direccion):
            raise DireccionMacError("La dirección MAC no es correcta")
        
        self.__direccion = direccion


    @property
    def get_direccion(self):
        return self.__direccion
    

    @get_direccion.setter
    def set_direccion(self, value: str):
        if not DireccionMac.es_direccion_correcta(value):
            raise DireccionMacError("La dirección MAC no es correcta")
        
        self.__direccion = value


    def __repr__(self) -> str:
        return f"[DireccionMac]: {self.__direccion}"
    

    def __eq__(self, __value: object) -> bool:
        return self.__direccion == __value.__direccion


    def es_direccion_correcta(direccion: str) -> bool:
        return True if len(direccion) == 17 else False


class DireccionMacError(Exception):
    pass