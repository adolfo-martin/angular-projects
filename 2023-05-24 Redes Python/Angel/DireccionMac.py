class DireccionMac:
    

    def __init__(self, direccion: str) -> None:
        if DireccionMac.es_direccion_correcta(direccion):
            self.__direccion = direccion
        else:
            DireccionMacError("La direccion no es una direccion correcta")


    #decorador getter
    @property
    def direccion(self) -> str:
        return(self.__direccion)

    #decordador setter
    @direccion.setter
    def direccion(self, valor: str):
        if self.es_direccion_correcta(valor):
            self.__direccion = valor
        else:
            DireccionMacError("La direccion no es una direccion correcta")



    def es_direccion_correcta(valor: str) -> bool:    
        if (len(valor)) != 17:
            return False
        

        return True
    

    def __repr__(self) -> str:
        return(f"[Direccion Mac] {self.__direccion}")


    def __eq__(self, __value: object) -> bool:
        return self.__direccion == __value.direccion

    

class DireccionMacError(Exception):
    pass

#direccion = DireccionMac("11:11:11:11:11:11")
#direccion2 = DireccionMac("11:11:11:11:11:11")
#print(direccion)
#print(direccion2)
#print(direccion == direccion2)