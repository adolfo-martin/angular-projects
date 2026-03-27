from TipoLista import *
from DireccionMac import *


class PuntoAcceso:
    def __init__(self) -> None:
        self.__lista_activa = TipoLista.NINGUNA
        self.__lista_negra = []
        self.__lista_blanca = []
        self.__equipos_conectados = []



    @property
    def lista_activa(self) -> list[TipoLista]:
        return self.__lista_activa

    # ---

    @property
    def lista_negra(self) -> list[DireccionMac]:
        return self.__lista_negra

    # ---

    @property
    def lista_blanca(self) -> list[DireccionMac]:
        return self.__lista_blanca
    
    # ---

    @property
    def equipos_conectados(self) -> list[DireccionMac]:
        return self.__equipos_conectados

    # ---

    def activar_lista(self, tipo_lista: TipoLista) -> None:
        self.__lista_activa = tipo_lista
    
    def añadir_direccion_a_lista(self, direccion: DireccionMac, tipo_lista: TipoLista) -> None:

        if tipo_lista != TipoLista.LISTA_BLANCA and tipo_lista != TipoLista and tipo_lista != TipoLista:
            raise PuntoAccesoError("La lista introducida no existe.")
            
        if tipo_lista == TipoLista.LISTA_BLANCA:
            self.__lista_blanca.append(direccion)
        
        if tipo_lista == TipoLista.LISTA_NEGRA:
            self.__lista_negra.append(direccion)


    def conectar_equipo(self, direccion_mac: DireccionMac) -> None:

        for direccion in self.__lista_negra:
            if direccion_mac.direccion_mac == direccion.direccion_mac:
                raise PuntoAccesoError(f"La dirección {direccion_mac} está en la lista negra.")
            
        for direccion in self.__lista_blanca:
            if direccion_mac.direccion_mac == direccion.direccion_mac:
                self.__equipos_conectados.append(direccion)

        print(f"El equipo con dirección {direccion_mac} ha sido añadido.")
        



class PuntoAccesoError(Exception):
    pass