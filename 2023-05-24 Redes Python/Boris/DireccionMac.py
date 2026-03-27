class DireccionMac:
    def __init__(self, direccion: str) -> None:
        if not DireccionMac.es_direccion_correcta(direccion):
            raise DireccionMacError("La direccion no es correcta")
        
        self.__direccion = direccion

    @property
    def get_direccion(self) -> str:
        return self.__direccion
    
    @get_direccion.setter
    def set_direccion(self, valor: str) -> None:
        self.__direccion = valor

    def __repr__(self) -> str:
        return f'[DireccionMac] {self.__direccion}'
    
    def __eq__(self, __valor: object) -> bool:
        return self.__direccion == __valor.__direccion
    

    def es_direccion_correcta(direccion: str) -> bool:
        return len(direccion) == 17

class DireccionMacError(Exception):
    pass

if __name__ == '__main__':
    pass
    # o1 = DireccionMac("11:11:11:11:11:11")
    # o2 = DireccionMac("11:11:11:11:11:11")
    # print(o1) 
    # print(o2)
    # print(o1 == o2)