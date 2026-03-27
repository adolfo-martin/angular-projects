from enum import Enum, auto
from DireccionMac import *


class TipoLista(Enum):
    NINGUNA = auto()
    LISTA_NEGRA = auto()
    LISTA_BLANCA = auto()

class PuntoAcceso:

    def __init__(self) -> None:
        self.__lista_activa = TipoLista.NINGUNA
        self.__lista_negra:list[DireccionMac] = []
        self.__lista_blanca:list[DireccionMac] = []
        self.__equipos_conectados:list[DireccionMac] = []
    

    @property
    def lista_activa(self)->list[DireccionMac]:
        return self.__lista_activa
    

    @property
    def lista_negra(self)->list[DireccionMac]:
        return self.__lista_negra
    

    @property
    def lista_blanca(self)->list[DireccionMac]:
        return self.__lista_blanca
    

    @property
    def equipos_conectados(self)->list[DireccionMac]:
        return self.__equipos_conectados


    def activar_lista(self, tipo_lista:TipoLista)->None:
        self.__lista_activa = tipo_lista

    
    def añadir_direccion_a_lista(self, direccionMac:DireccionMac)->None:
        
        if not DireccionMac.esCorrecta(direccionMac):
            raise DireccionMacError(f"Error: la direccion MAC {direccionMac} introducida es incorrecta")
        
        elif self.__lista_activa == TipoLista.LISTA_BLANCA:
            self.lista_blanca.append(direccionMac)

        else:
            self.lista_negra.append(direccionMac)
    

    def conectar_equipo(self, direccionMac:DireccionMac)->None:

        if not DireccionMac.esCorrecta(direccionMac):
            raise DireccionMacError(f"Error: la direccion MAC {direccionMac} introducida es incorrecta")
        
        elif direccionMac in self.__equipos_conectados:
            raise PuntoAccesoError(f"Error: la MAC introducida {direccionMac} ya existe en este punto de acceso")
        
        elif self.__lista_activa == TipoLista.LISTA_BLANCA:
            if direccionMac in self.__lista_blanca:
                self.__equipos_conectados.append(direccionMac)
            else:
                raise PuntoAccesoError(f"Error: la direccion MAC {direccionMac} no esta permitida en este punto de acceso")
            
        elif self.__lista_activa == TipoLista.LISTA_NEGRA:
            if direccionMac not in self.__lista_negra:
                self.__equipos_conectados.append(direccionMac)
            else:
                raise PuntoAccesoError(f"Error: la direccion MAC {direccionMac} no esta permitida en este punto de acceso")
        
        else:
            self.__equipos_conectados.append(direccionMac)


class PuntoAccesoError(Exception):
    pass