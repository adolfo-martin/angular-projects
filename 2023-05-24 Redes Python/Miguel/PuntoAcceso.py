from enum import Enum, auto
from DireccionMac import DireccionMac

class TipoLista(Enum):
    NINGUNA = auto()
    LISTA_BLANCA = auto()
    LISTA_NEGRA = auto()


class PuntoAcceso:
    def __init__(self):
        self.__lista_activa: TipoLista.NINGUNA = []
        self.__lista_negra: list[DireccionMac] = []
        self.__lista_blanca: list[DireccionMac] = []
        self.__equipos_conectados: list[DireccionMac] = []

    @property
    def lista_activa(self) -> TipoLista:
        return self.__lista_activa
    
    @property
    def lista_negra(self) -> list[DireccionMac]:
        return self.__lista_negra
    
    @property
    def lista_blanca(self) -> list[DireccionMac]:
        return self.__lista_blanca
    
    @property
    def equipos_conectados(self) -> list[DireccionMac]:
        return self.__equipos_conectados


    def activar_lista (self, tipo_lista: TipoLista) -> None:
        self.__lista_activa: tipo_lista.LISTA_NEGRA


    def añadir_direccion_a_lista(self, direccion: DireccionMac, tipo_lista: TipoLista) -> None:

        if tipo_lista != tipo_lista.LISTA_BLANCA and not direccion in self.__lista_blanca:
            self.__lista_negra.append(direccion)
        else:
            raise PuntoAccesoError(f"ERROR: La {direccion} está añadida a la whitelist")

        if tipo_lista != tipo_lista.LISTA_NEGRA and not direccion in self.__lista_negra:
            self.__lista_blanca.append(direccion)
        else:
            raise PuntoAccesoError(f"ERROR: La {direccion} está añadida a la blacklist")
        
    
    def conectar_equipo(self, direccion: DireccionMac) -> None:
        
        for equipo_lista_blanca in self.__lista_blanca:
            if equipo_lista_blanca.direccion_mac == direccion.direccion_mac:
                self.equipos_conectados.append(direccion)

        for equipo_lista_negra in self.__lista_negra:
            if equipo_lista_negra.direccion_mac == direccion.direccion_mac:
                raise PuntoAccesoError(f"ERROR: Este equipo está puesto en la blacklist")









class PuntoAccesoError(Exception):
    pass
