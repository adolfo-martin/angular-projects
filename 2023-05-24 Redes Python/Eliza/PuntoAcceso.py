from ast import List
from DireccionMac import DireccionMac
from TipoLista import TipoLista


class PuntoAcceso:
    #Constructor
    def __init__(self) -> None:
        self.__lista_vacia = TipoLista
        self.__lista_negra = list[DireccionMac]
        self.__lista_blanca = list[DireccionMac]
        self.__equipos_conectados = list[DireccionMac]

    #GETTERS
    @property
    def lista_vacia(self) -> list[DireccionMac]:
        return self.__lista_vacia
    
    @property
    def lista_negra(self) -> list[DireccionMac]:
        return self.__lista_negra
    
    @property
    def lista_blanca(self) -> list[DireccionMac]:
        return self.__lista_blanca   
    
    @property
    def equipos_conectados(self) -> list[DireccionMac]:
        return self.__equipos_conectados 
    
    #Métodos funcionales
    def activar_lista(self, tipo_lista: TipoLista) -> None:
        if tipo_lista is TipoLista.LISTA_NEGRA:
            self.__lista_negra = []
        
        if tipo_lista is TipoLista.LISTA_BLANCA:
            self.__lista_blanca = []

        if tipo_lista is TipoLista.NINGUNA:
            self.__lista_vacia = []
    
    def añadir_direccion_a_lista(self, direccion : DireccionMac, tipo_lista : TipoLista) -> None:
        # if tipo_lista is not TipoLista.LISTA_BLANCA:
        #     raise PuntoAccesoError(f"Lista incorrecta de la dirección {DireccionMac.direccion}.")
        # self.lista_blanca.append(direccion)
        
        # if tipo_lista is not TipoLista.LISTA_NEGRA:
        #      raise PuntoAccesoError(f"Lista incorrecta de la dirección {DireccionMac.direccion}.")
        # self.lista_negra.append(direccion)

        if tipo_lista is TipoLista.LISTA_BLANCA:
            self.lista_blanca.append(direccion)
        
        if tipo_lista is not TipoLista.LISTA_NEGRA:
            self.lista_negra.append(direccion)

        raise PuntoAccesoError(f"Lista incorrecta de la dirección {DireccionMac.direccion}.")


    def conectar_equipo(self, direccion : DireccionMac) -> None:
        if direccion in self.__lista_blanca:
            self.__equipos_conectados.append(direccion)
        
        elif direccion in self.__lista_negra:
            self.__equipos_conectados.append(direccion)
        
        elif direccion in self.__lista_vacia:
            self.__equipos_conectados.append(direccion)
        
        raise PuntoAccesoError(f"ERROR >> No se ha podido añadir el equipo a la lista.")


class PuntoAccesoError(Exception):
    pass



