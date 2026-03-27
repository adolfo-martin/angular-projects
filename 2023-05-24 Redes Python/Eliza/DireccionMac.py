class DireccionMac:

    #Constructor
    def __init__(self, direccion : str)-> None:
        if not DireccionMac.es_direccion_correcta(direccion):
            raise DireccionMacError(f"ERROR >> La dirección Mac {direccion} es incorrecta." )
        
        self.__direccion = direccion

    
    #GETTER y SETTER
    @property
    def direccion(self) -> str:
        return self.__direccion
    
    @direccion.setter 
    def direccion(self, valor : str) -> None:
        if not DireccionMac.es_direccion_correcta(valor):
            raise DireccionMacError( f'ERROR >> La dirección Mac {valor} es incorrecta.' )
         
        self.__direccion = valor

    #toString
    def __rep__(self) -> str:
        return f'[Dirección Mac] {self.__direccion}'
    
    #equals
    def __eq__(self, __value : object) -> bool:
        return self.__direccion == __value.__direccion
    
    #Método funcional
    def es_direccion_correcta(direccion : str) -> bool:
        return  len(direccion) == 17 
        # if len(direccion) != 17:
        #     return False
        
        # return True

    
    
        

class DireccionMacError(Exception):
    pass
