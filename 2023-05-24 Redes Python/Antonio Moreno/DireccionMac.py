class DireccionMac:

    def __init__(self, direccionMac:str) -> None:
        
        if DireccionMac.esCorrecta(direccionMac):
            self.__direccionMac = direccionMac
        else: 
            raise DireccionMacError(f"Error: La direccion MAC introducida {direccionMac} no es correcta.")
    

    @property
    def direccionMac(self):
        return self.__direccionMac


    @direccionMac.setter
    def direccionMac(self, direccionMac:str)->None:
        
        if DireccionMac.esCorrecta(direccionMac):
            self.__direccionMac = direccionMac
    

    def esCorrecta(direccionMac:str)-> bool:
        if len(direccionMac) != 17:
            return False
        return True


    @property
    def __repr__(self) -> str:
        return f"[DireccionMac] {self.__direccionMac}"


    @property
    def __eq__(self, valor: object) -> bool:
        return self == valor


class DireccionMacError(Exception):
    pass
