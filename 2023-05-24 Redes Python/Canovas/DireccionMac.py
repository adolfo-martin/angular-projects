class DireccionMac:
    def __init__(self, direccion: str) -> None:
        self.__direccion = direccion

    @property
    def direccion(self) -> str:
        return self.__direccion
    
    @direccion.setter
    def direccion(self, value: str) -> None:
        self.__direccion = value

    
    def __repr__(self) -> str:
        return (f"[DIRECCION MAC]{self.direccion}")


    def __eq__(self, value: object) -> bool:
        return self.__dict__ == value
        
    def es_direccion_correcta(self, direccion: str) -> bool:
        if len(direccion) != 17:
            return False
        return True
    
    
class DireccionMacError(Exception):
    pass
