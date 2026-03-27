from enum import Enum, auto
from DireccionMac import DireccionMac

class TipoLista(Enum):
    NINGUNA= auto()
    LISTA_BLANCA=auto()
    LISTA_NEGRA=auto()


class PuntoAcceso:
    def __init__(self):
        self.__lista_activa=TipoLista.NINGUNA

        self.__lista_negra=[]
        self.__lista_blanca=[]
        self.__equipos_conectados=[]
        
        
    def activar_lista(self, tipo_lista:TipoLista):
            self.__lista_activa=TipoLista.NINGUNA
            self.__lista_activa=tipo_lista

        

    @property
    def lista_activa(self):
        return self.__lista_activa
    
    @property
    def lista_negra(self):
        return self.__lista_negra
    
    @property
    def lista_blanca(self):
        return self.__lista_blanca
    
    @property
    def equipos_conectados(self):
        return self.__equipos_conectados
    


    def añadir_direccion_a_lista(self, direccionMac:DireccionMac, tipo_lista:TipoLista)->None:
        if tipo_lista==TipoLista.LISTA_BLANCA:
            self.__lista_blanca.append(DireccionMac)
        if tipo_lista==TipoLista.LISTA_NEGRA:
            self.__lista_negra.append(DireccionMac)

        if tipo_lista!=TipoLista.LISTA_BLANCA and tipo_lista!=TipoLista.LISTA_NEGRA:
            raise PuntoAccesoError(f"No se ha podido añadir la direccion a la lista")
        
        
        
        
    def conectar_equipo(self, direccion:DireccionMac):
        encontradoListaBlanca:bool = False
        encontradoListaNegra:bool = False
        if self.__lista_activa==TipoLista.LISTA_BLANCA:
            for i in range(0, len(self.__lista_blanca)):
                if(self.__lista_blanca[i]==direccion):
                    encontradoListaBlanca = True
                    self.__equipos_conectados.append(direccion)
                
        

        if self.__lista_activa==TipoLista.NINGUNA:
            self.__equipos_conectados.append(direccion)
        
        if self.__lista_activa==TipoLista.LISTA_NEGRA :
            for i in range(0, len(self.__lista_blanca)):
                if self.__lista_negra==direccion:
                    encontradoListaNegra = True
                    break

        if encontradoListaNegra ==False:
            self.__equipos_conectados.append(direccion)

        if encontradoListaBlanca==False and encontradoListaNegra==True:
            raise PuntoAccesoError("No se ha podido conectar el equipo")

        
            




                 


class PuntoAccesoError(Exception):
    pass