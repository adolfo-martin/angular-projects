from enum import Enum, auto
from DireccionMac import *

class TipoLista(Enum):
    NINGUNA = auto()
    LISTA_BLANCA = auto()
    LISTA_NEGRA = auto()

class PuntoAcceso:

    def __init__(self) -> None:
    # def __init__(self, lista_activa: TipoLista, lista_negra: list[DireccionMac], lista_blanca: list[DireccionMac], equipos_conectados: list[DireccionMac]) -> None:
        self.__tipo_lista = TipoLista.NINGUNA
        self.__lista_negra = []
        self.__lista_blanca = []
        self.__equipos_conectados = []

    @property
    def tipo_lista(self):
        return self.__tipo_lista


    @property
    def lista_negra(self):
        return self.__lista_negra
    

    @property
    def lista_blanca(self):
        return self.__lista_blanca
    

    @property
    def equipos_conectados(self):
        return self.__equipos_conectados
    

    def activar_lista(self, tipo_lista: TipoLista) -> None:
        self.__tipo_lista = tipo_lista


    def añadir_direccion_a_lista(self, direccion: DireccionMac, tipo_lista: TipoLista) -> None:
        if tipo_lista == TipoLista.LISTA_BLANCA:
            self.__lista_blanca.append(direccion)

        elif tipo_lista == TipoLista.LISTA_NEGRA:
            self.__lista_negra.append(direccion)
        else:
            raise PuntoAccesoError("ERROR, no has introducido un tipo de lista correcto")

    def conectar_equipo (self, direccion: DireccionMac) -> None:
        if PuntoAcceso.tipo_lista == TipoLista.LISTA_BLANCA:
            self.__equipos_conectados.append(direccion)
        elif PuntoAcceso.tipo_lista == TipoLista.LISTA_NEGRA:
            self.__equipos_conectados.append(direccion)
        else:
            raise PuntoAccesoError("ERROR, ")


class PuntoAccesoError(Exception):
    pass