from TipoLista import TipoLista
from DireccionMac import *

class PuntoAcceso:
    def __init__(self):
        self.__lista_activa = TipoLista.NINGUNA
        self.__lista_negra = [DireccionMac.direccion]
        self.__lista_blanca = [DireccionMac.direccion]
        self.__equipos_conectados = [DireccionMac.direccion]

    @property
    def lista_activa(self) -> TipoLista:
        return self.__lista_activa
    
    @property
    def lista_negra(self) -> TipoLista:
        return self.__lista_negra
    
    @property
    def lista_blanca(self) -> TipoLista:
        return self.__lista_blanca
    
    @property
    def equipos_conectados(self) -> list:
        return self.__equipos_conectados
   
    def activar_lista(self, lista: TipoLista) -> bool:
        if lista != TipoLista.NINGUNA:
            self.__lista_activa = lista
            return True
        raise PuntoAccesoError()
        

    def añadir_direccion_a_lista(self, mac: DireccionMac, lista: TipoLista) -> bool:
        if lista == TipoLista.LISTA_BLANCA:
                self.__lista_blanca.append(mac)
                return True
        if lista == TipoLista.LISTA_NEGRA:
                self.__lista_negra.append(mac)
                return True

        else:
            raise PuntoAccesoError()
            
        
        
    def conectar_equipo(self, mac: DireccionMac) -> bool:
        if mac not in self.__equipos_conectados:
            if self.__lista_activa == TipoLista.LISTA_BLANCA:
                self.__lista_blanca.append(mac)
                return True
            if self.__lista_activa == TipoLista.LISTA_NEGRA:
                self.__lista_negra.append(mac)
                return True

        else:
            raise PuntoAccesoError()

    def listar_equipos_conectados(self) -> None:
        for equipo in self.__equipos_conectados:
            print(f"{DireccionMac.pintar_equipo}")

class PuntoAccesoError(Exception):
    pass
