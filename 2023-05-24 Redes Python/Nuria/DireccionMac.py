from DireccionMacError import DireccionMacError


class DireccionMac:
    def __init__(self, direccion: str):
        self.__direccion: str = direccion
        direccion_correcta: bool = DireccionMac.es_direccion_correcta(self.__direccion)

        if direccion_correcta == False : raise DireccionMacError("La dircción MAC introducida es incorrecta")
        

    @property
    def __direccion(self):
        return self.__direccion
    

    def __direccion(self, valor):
        self.__direccion = valor
        return self.__direccion


    def __repr__() -> str:
        return f"[DireccionMac] {DireccionMac.__direccion}"
    

    def __eq__(self, value: object) -> bool:
        if isinstance(value (self)):
            return True

    
    def es_direccion_correcta(direccion: str) -> bool:
        if len(direccion) != 17:
            return False
        else:
            return True
        
    
