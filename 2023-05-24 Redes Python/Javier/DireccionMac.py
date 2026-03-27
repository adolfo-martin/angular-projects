
class DireccionMac:
    '''Constructor'''
    def __init__(self, direccion: str):
        if not DireccionMac.es_direccion_correcta(direccion):
            raise DireccionMacError('ERROR: La dirección MAC no es correcta')
        else:
            self.__direccion = direccion
        
    '''Getters y Setters'''
    @property
    def direccion (self) -> str:
        return self.__direccion
    
    @direccion.setter
    def direccion(self, valor: str) -> None:
        if not (DireccionMac.es_direccion_correcta(valor)):
            raise DireccionMacError('ERROR: La cadena introducida no cumple el formato MAC')
        else:
            self.__direccion = valor
    
    '''Métodos'''
    def __repr__(self) -> str:
        return f'[Direccion MAC] -> {self.__direccion}'
    
    def __eq__(self, valueDireccionMac: object) -> bool:
        if(self.__direccion == valueDireccionMac.direccion):
            return True

    def es_direccion_correcta(valor: str) -> bool:
        if len(valor) != 17:
            return False
        return True 

class DireccionMacError(Exception):
    pass

imprime = DireccionMac('00:00:00:00:00:00')
print(imprime)