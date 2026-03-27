from TipoLista import TipoLista
from DireccionMac import *

class PuntoAcceso:
    '''Constructor'''
    def __init__(
            self,
            lista_negra: list[DireccionMac], 
            lista_blanca: list[DireccionMac], 
            equiposConectados: list[DireccionMac]
            ):
        self.__lista_activa = TipoLista.NINGUNA
        self.__lista_negra = lista_negra
        self.__lista_blanca = lista_blanca
        self.__equiposConectados = equiposConectados
    
    '''Getters y Setters'''
    @property
    def lista_activa(self) -> TipoLista:
        return self.__lista_activa
    
    @lista_activa.setter
    def lista_activa(self, valor: TipoLista) -> TipoLista:
        self.__lista_activa = valor

    @property
    def lista_negra(self) -> list[DireccionMac]:
        return self.__lista_negra
    
    @lista_negra.setter
    def lista_negra(self, valor: list[DireccionMac]) -> None:
        self.__lista_negra = valor

    @property
    def lista_blanca(self) -> list[DireccionMac]:
        return self.__lista_blanca
    
    @lista_blanca.setter
    def lista_blanca(self, valor: list[DireccionMac]) -> None:
        self.__lista_blanca = valor

    @property
    def equiposConectados(self) -> list[DireccionMac]:
        return self.__equiposConectados
    
    @equiposConectados.setter
    def equiposConectados(self, valor: list[DireccionMac]) -> None:
        self.__equiposConectados = valor


    '''Métodos'''
    def activar_lista(self, tipo_lista: TipoLista) -> None:
        self.__lista_activa = tipo_lista
    
    def añadir_direccion_a_lista(self, direccion: DireccionMac, tipo_lista: TipoLista) -> None:
        if tipo_lista == (TipoLista.LISTA_NEGRA):
            self.__lista_negra.append(direccion)
        elif tipo_lista == (TipoLista.LISTA_BLANCA):
            self.__lista_blanca.append(direccion)
        else:
            raise PuntoAccesoError('ERROR: no has introducido una lista correcta')
        
    def conectar_equipo(self, direccion: DireccionMac) -> None:
        if direccion in self.__lista_blanca:
            self.__equiposConectados.append(direccion)
        
        elif direccion not in self.lista_negra:
            self.__equiposConectados.append(direccion)
        
        elif direccion in self.__lista_activa:
            self.__equiposConectados.append(direccion)
        
        else:
            raise PuntoAccesoError('ERROR: la direccion no está en ninguna lista')


class PuntoAccesoError(Exception):
    pass