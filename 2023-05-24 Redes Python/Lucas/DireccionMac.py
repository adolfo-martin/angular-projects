class DireccionMac:
    def __init__(self,direccion) -> None:
        self.__direccion = direccion
        #self.__direccion = "11:11:11:11:11:11"
        #self.direccion = direccion

    def devolver_direccion_mac(self):
        return self.__direccion
    
    def es_correcta(self):
        if len(self.__direccion) == 17:
            return True
        if len(self.__direccion) != 17:
            return False