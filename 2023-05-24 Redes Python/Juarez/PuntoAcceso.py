from enum import Enum, auto
from DireccionMac import DireccionMac

class TipoLista(Enum):
    NINGUNA = auto()
    LISTA_NEGRA = auto()
    LISTA_BLANCA = auto()

class PuntoAcceso:
    def __lista_activa__(self, list: DireccionMac) -> TipoLista:
        pass

    def __lista_negra__(self, list: DireccionMac):
        pass

    def __lista_blanca__(self, list: DireccionMac):
        pass

    def __equipos_conectados__(self, list: DireccionMac):
        pass

    def __init__(self, lista_activa:list[TipoLista], lista_negra: list[DireccionMac], lista_blanca: list[DireccionMac], equipos_conectados: list[DireccionMac]):
        self.__lista_activa = lista_activa
        self.__lista_negra = lista_negra
        self.__lista_blanca = lista_blanca
        self.__equipos_conectados = equipos_conectados

    @property
    def lista_activa(self):
        return self.lista_activa
        
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
        self.tipo_lista = tipo_lista

    def añadir_direccion(self, direccion: str, tipo_lista: TipoLista) -> None:
        if tipo_lista == TipoLista.LISTA_BLANCA:
            self.__lista_blanca.insert(direccion)
        elif tipo_lista == TipoLista.LISTA_NEGRA:
            self.__lista_negra.insert(direccion)
        else:
             print("ERROR EN LA LISTA")

    def conectar_equipo(self, direccion: DireccionMac) -> None:
        self.__equipos_conectados.append(DireccionMac)

    class PuntoAccesoError(Exception):
        pass