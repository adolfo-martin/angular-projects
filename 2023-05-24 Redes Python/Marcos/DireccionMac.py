class DireccionMac:
    def __init__(self, direccion:str)->None:
        if not DireccionMac.es_correcta(direccion):
            raise DireccionMacError("Falla el constructor de DireccionMac")
        self.__direccion=direccion

    @property
    def direccion(self):
        return self.__direccion
    def es_correcta(direccion)->bool:
        if len(direccion) == 17:
            return True
        else:
            return False
    
    @direccion.setter
    def direccion(self, direccionNueva:str)->None:
        if not DireccionMac.es_correcta(direccionNueva):
            raise DireccionMacError("Falla el setter de DireccionMac")
        self.__direccion=direccionNueva

    def __repr__(self) -> str:
        return f"[DireccionMac]{self.direccion}"
    
    def __eq__(self, value:object)->bool:
        return self.direccion==value.__direccion

    
        
class DireccionMacError(Exception):
    ...
        
