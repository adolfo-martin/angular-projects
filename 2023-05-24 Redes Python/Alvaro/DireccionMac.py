class DireccionMac:
    def __init__(self, direccion_mac: str) -> None:

        if self.es_direccion_correcta(direccion_mac) == False:
            raise DireccionMacError("La direccion MAC introducida no es válida.")

        self.__direccion_mac = direccion_mac

    @property
    def direccion_mac(self) -> str:
        return self.__direccion_mac
        
    @direccion_mac.setter
    def direccion_mac(self, valor: str) -> None:
        self.__direccion_mac = valor

    def __repr__(self) -> str:
        return f"[Dirección MAC]: {self.__direccion_mac}"
       
    def __eq__(self, valor: object) -> bool:
        return self.__direccion_mac == valor.direccion_mac
    

    def es_direccion_correcta(self, direccion_mac: str) -> bool:

        if len(direccion_mac) != 17:
            return False

        return True


class DireccionMacError(Exception):
    pass