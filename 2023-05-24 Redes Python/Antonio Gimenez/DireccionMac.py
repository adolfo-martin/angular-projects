class DireccionMac:
    
    def __init__(self,direccion:str) -> None:

        if not DireccionMac.es_direccion_correcta(direccion):
            raise DireccionMacError("Direccion Mac erronea en el init")
        self.__direccion = direccion
        

    #Getter
    @property
    def direccion(self) -> str:
        return self.__direccion
    
    #Setter
    @direccion.setter
    def direccion(self,valor):
        self.__direccion = valor
        return self.__direccion

    def __repr__(self, direccion:str) -> str:
        return f"[DireccionMac] {self.__direccion}"
    
    def __eq__(self, valor: object) -> bool:
        return True if self.__direccion == valor else False
    
    def es_direccion_correcta(direccion: str) -> bool:
        if len(direccion) == 17:
            return True
        return False
    
    
    


class DireccionMacError:
    pass
