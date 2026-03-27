class DireccionMac:

    def __init__(self, direccion: str) -> None:
        if not DireccionMac.es_direccion_correcta(direccion):
            raise DireccionMacError("Error. La dirección no es correcta.")
        self.__direccion = direccion


    @property
    def direccion(self) -> str:
        return self.__direccion


    def set_direccion(self, direccion: str) -> None:
        if not DireccionMac.es_direccion_correcta(direccion):
            raise DireccionMacError("Error. La dirección no es correcta.")
        self.__direccion = direccion


    def __repr__(self) -> str:
        return f"{self.__direccion}"


    def __eq__(self, __value: object) -> bool:
        return self.__direccion == __value.direccion


    def es_direccion_correcta(direccion: str) -> bool: 
        if len(direccion) != 17:
            return False
        if direccion == "":
            return False
        return True
        
class DireccionMacError(Exception):
    pass
