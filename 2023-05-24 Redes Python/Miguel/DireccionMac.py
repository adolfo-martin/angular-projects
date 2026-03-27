class DireccionMac:

    def __init__(self, direccion_mac: str) -> None:
        
        if not DireccionMac.es_direccion_correcta(direccion_mac):
            raise DireccionMacError(f"ERROR: La dirección MAC {direccion_mac} no es correcta")
 
        self.__direccion_mac = direccion_mac


    @property
    def direccion_mac(self):
        return self.__direccion_mac
    

    @direccion_mac.setter
    def direccion_mac(self, value):
        if not DireccionMac.es_direccion_correcta(value):
            raise DireccionMacError(f"ERROR: El valor {value} no es correcto")
        
        self.__direccion_mac = value


    def es_direccion_correcta(direccion_mac: str)-> bool:

        if len(direccion_mac) != 17:
            return False
        
        return True
    
    
    def __repr__(self) -> str:
        return f"[Direccion MAC] -> {self.__direccion_mac}"
    
    
    def __eq__(self, __value: object) -> bool:
        return self.__direccion_mac == __value.direccion_mac



class DireccionMacError(Exception):
    pass
