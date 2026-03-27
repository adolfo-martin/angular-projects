from DireccionMac import *
from enum import Enum, auto

class TipoLista(Enum):
    NINGUNA = auto()
    LISTA_BLANCA = auto()
    LISTA_NEGRA = auto()



class PuntoAcceso:

    def __init__(self) -> None:
        self.__lista_activa = TipoLista.NINGUNA
        self.__lista_blanca = []
        self.__lista_negra = []
        self.__equipos_conectados = []
    
    @property
    def lista_activa(self) -> TipoLista:
        return self.__lista_activa
    
    @property
    def lista_blanca(self) -> list[DireccionMac]:
        return self.__lista_blanca
    
    @property
    def lista_negra(self) -> list[DireccionMac]:
        return self.__lista_negra
    
    @property
    def equipos_conectados(self) -> list[DireccionMac]:
        return self.__equipos_conectados
    
    def activar_lista(self, tipo_lista: TipoLista) -> None:
        self.__tipo_lista = tipo_lista

    def añadir_direccion_a_lista(self, direccion: DireccionMac, tipo_lista:TipoLista) -> None:
        if tipo_lista == TipoLista.LISTA_NEGRA:
            self.__lista_negra.append(direccion)
        elif tipo_lista == TipoLista.LISTA_BLANCA:
            self.__lista_blanca.append(direccion)
        else:
            raise PuntoAccesoError("Error en el tipo de lista")
        

    def conectar_equipo(self, direccion_mac:DireccionMac) -> None:
        tipo= TipoLista(PuntoAcceso.activar_lista())
        if tipo == TipoLista.LISTA_BLANCA:
            for direccion in self.__lista_blanca:
                if direccion == direccion_mac:
                    self.__equipos_conectados.append(direccion_mac)
        elif tipo == TipoLista.LISTA_NEGRA:
            for direccion in self.__lista_negra:
                if direccion == direccion_mac:
                    self.__equipos_conectados.append(direccion_mac)
        else:
            raise PuntoAccesoError("La lista Activa es Ninguna y no se puede añadir el equipo")

class PuntoAccesoError:
    pass