class DireccionMac:
    def __init__(self, direccion: str) -> None:
        if self.es_direccion_correcta(direccion):
            self.__direccion = direccion
        else:
            raise DireccionMacError("Error, la dirección introducida no es correcta")

    @property
    def direccion(self) -> str:
        return self.__direccion
    
    @direccion.setter
    def direccion(self, direccion: str) -> None:
        if self.es_direccion_correcta(direccion):
            self.__direccion = direccion
        else:
            raise DireccionMacError("Error, la dirección introducida no es correcta")

    def es_direccion_correcta(self,direccion: str) -> bool:
        return True if len(direccion) == 17 else False

    def __repr__(self) -> str:
        return f"[DireccionMac] {self.__direccion}"

    def __eq__(self, _value:object) -> bool:
        return self.__direccion == _value.__direccion
    
    

class DireccionMacError(Exception):
    pass