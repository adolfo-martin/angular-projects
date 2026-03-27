

class DireccionMac:
    
    def __init__(self, direccion) -> None:
        if not self.es_direccion_mac_correcta(direccion):
            raise DireccionMacError(f"La direccion {direccion} no tiene un formato correcto.")
        
        self.__direccion_mac = direccion 
        
    def __eq__(self, __value: object) -> bool:
        return self.__direccion_mac == __value.__direccion_mac 
    
    def __repr__(self) -> str:
        return f"[Direccion Mac] {self.__direccion_mac}"
    
    @property
    def direccion_mac(self) -> str:
        return self.__direccion_mac
    
    @direccion_mac.setter
    def direccion_mac(self, direccion_mac) -> None:
        self.__direccion_mac = direccion_mac
    
    def es_direccion_mac_correcta(self, direccion_mac:str) -> bool:
        if len(direccion_mac) != 17: 
            return False
        return True

class DireccionMacError(Exception):
    pass


