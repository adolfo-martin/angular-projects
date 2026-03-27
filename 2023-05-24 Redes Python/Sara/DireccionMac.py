class DireccionMac:
    
    def __init__(self, direccion : str) -> None:
        if not DireccionMac.es_direccion_correcta(direccion):
            raise DireccionMacError('Error: Longitud no válida')
        
        self.__direccion = direccion
        
    @property
    def direccion(self) -> str:
        return self.__direccion
    
    @direccion.setter
    def direccion(self, valor : str) -> None:
        if not DireccionMac.es_direccion_correcta(valor):
            raise DireccionMacError('Error: Longitud no válida')
        
        self.__direccion = valor

    def es_direccion_correcta(direccion : str) -> bool:
        if len(direccion) != 17:
            return False
        
        return True

    def __repr__(self) -> str:
        return f'[Direccion Mac] {self.__direccion}'
    
    def __eq__(self, __valor: object) -> bool:
        return self.__direccion == __valor.__direccion



class DireccionMacError(Exception):
    pass