from TipoLista import TipoLista
from DireccionMac import DireccionMac

class PuntoAcceso:
    def __init__(self) -> None:
        self.__lista_activa = TipoLista.NINGUNA
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
    def equipos_conectadas(self) -> list[DireccionMac]:
        return self.__equipos_conectados
    
    def activar_lista(self,tipo_lista: TipoLista) -> None:
        self.__lista_activa = tipo_lista
    
    def añadir_direccion_a_lista(self,direccion: DireccionMac, tipo_lista: TipoLista) -> None:
        if tipo_lista == TipoLista.LISTA_BLANCA:
            self.__lista_blanca.append(direccion)
        
        if tipo_lista == TipoLista.LISTA_NEGRA:
            self.__lista_negra.append(direccion)
        
        if tipo_lista == TipoLista.NINGUNA:
            raise PuntoAccesoError("Error, no ha especificafo la lista")
        
    def conectar_equipo(self, direccion: DireccionMac) -> None:
        if self.__lista_activa == TipoLista.NINGUNA:
            self.__equipos_conectados.append(direccion)
        
        if self.__lista_activa == TipoLista.LISTA_BLANCA:
            if direccion in self.__lista_blanca:
                self.__equipos_conectados.append(direccion)

            else:
                raise PuntoAccesoError("Error, la dirección Mac no se encuentra el la lista blanca")
        
        if self.__lista_activa == TipoLista.LISTA_NEGRA:
            if direccion in self.__lista_negra:
                raise PuntoAccesoError("Error, la dirección Mac se encuentra el la lista negra")
            
            else:
                self.__equipos_conectados.append(direccion)
                

    

class PuntoAccesoError(Exception):
    pass