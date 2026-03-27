class DireccionMac:

    def __init__(self, direccionMac: str) -> None:
        self.__direccionMac = direccionMac
        raise Exception("ERROR: CON LA INTRODUCCIÓN DE LA DIRECCION MAC")

    @property
    def direccionMac (self) -> str:
        return self.__direccionMac
    
    @direccionMac.setter
    def direccionMac (self,) -> None:
        self.__direccionMac = DireccionMac
    def __repr__(self) -> str:
        return f"Direccion mac = {self.direccionMac}"
    
    def __eq__(self, __direccionMac: object) -> bool:
        if __direccionMac == DireccionMac:
            return True
        else:
            False

    def direccionMacEsCorrecta(direccionMac) -> bool:
        if len(direccionMac) == 17:
            return True and print(f'La direccion MAC {direccionMac} Es correcta')
        else:
            return False and print(f'La direccion MAC {direccionMac} Es erronea')
    

        