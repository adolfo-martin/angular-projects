from DireccionMac import DireccionMac
from TipoLista import TipoLista


class PuntoAcceso:
    def __init__(self, __puntoAcceso, __lista_activa: TipoLista, __lista_negra: list[DireccionMac], __lista_blanca: list[DireccionMac], __equipos_conectados: list[DireccionMac]) -> None:
        self.__puntoAcceso = __puntoAcceso
        self.__lista_activa = __lista_activa
        self.__lista_negra = __lista_negra
        self.__lista_blanca = __lista_blanca
        self.__equipos_conectados = __equipos_conectados

    @property
    def puntoAcceso (self) -> list:
        return self.__puntoAcceso, self.__lista_activa == 'NINGUNA', self.__lista_negra, self.__lista_blanca,self.__equipos_conectados
    
    def activar_lista (tipo_lista:TipoLista) -> None:
        ...
    
    def añadir_direcciones_a_lista(direccion:DireccionMac, tipo_lista:TipoLista):
        ...

    def conectar_equipo(direccion:DireccionMac) -> None:
        ...
    
    
   

    

    
