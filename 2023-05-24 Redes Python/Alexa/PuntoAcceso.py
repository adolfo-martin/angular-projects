from enum import Enum, auto
from DireccionMac import DireccionMac


class TipoLista(Enum):
    NINGUNA = auto()
    LISTA_NEGRA = auto()
    LISTA_BLANCA = auto()

class PuntoAcceso():

    def __init__(self) -> None:
        self.__lista_activa = TipoLista.NINGUNA
        self.__lista_negra: list[DireccionMac] = []
        self.__lista_blanca: list[DireccionMac] = []
        self.__equipos_conectados: list[DireccionMac] = []
        

    @property
    def lista_activa(self) -> list[DireccionMac]:
        return self.__lista_activa


    @property
    def lista_negra(self) -> list[DireccionMac]:
        return self.__lista_negra
    

    @property
    def lista_blanca(self) -> list[DireccionMac]:
        return self.__lista_blanca
    

    @property
    def lista_equipos_conectados(self) -> list[DireccionMac]:
        return self.__equipos_conectados
    

    def activar_lista(self, tipo_lista: TipoLista) -> None:
        self.__lista_activa = tipo_lista


    def añadir_direccion_a_lista(self, direccion: DireccionMac, tipo_lista: TipoLista) -> None:
        if tipo_lista == TipoLista.LISTA_NEGRA:
            self.__lista_negra.append(direccion)
        elif tipo_lista == TipoLista.LISTA_BLANCA:
            self.__lista_blanca.append(direccion)
        else:
            raise PuntoAccesoError("Error. El tipo de lista no es correcta.")


    def conectar_equipo(self, direccion_mac: DireccionMac) -> None:
        if self.__lista_activa == TipoLista.LISTA_NEGRA:
            for direccion in self.__lista_negra:
                if direccion_mac == direccion:
                    raise PuntoAccesoError(f"No se puede conectar el equipo con dirección {direccion_mac} porque se encuentra en la lista negra.")
                else:
                    self.__equipos_conectados.append(direccion)
                    break

        elif self.__lista_activa == TipoLista.LISTA_BLANCA:
            for direccion in self.__lista_blanca:
                if direccion_mac == direccion:
                    self.__equipos_conectados.append(direccion)
                    break
                else:
                    raise Exception(f"No se puede conectar el equipo con dirección {direccion_mac} porque no se encuentra en la lista blanca.")
        


class PuntoAccesoError(Exception):
    pass
