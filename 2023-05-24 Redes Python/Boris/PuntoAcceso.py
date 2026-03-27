from DireccionMac import DireccionMac
from TipoLista import TipoLista


class PuntoAcceso:
    def __init__(self):
        self.__lista_activa = TipoLista.NINGUNA
        self.__lista_negra: list[DireccionMac]
        self.__lista_blanca: list[DireccionMac]
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
    
    def activar_lista(self, tipo_lista: TipoLista) -> None:
        if tipo_lista == TipoLista.NINGUNA:
            self.__lista_activa = TipoLista.NINGUNA

        if tipo_lista == TipoLista.LISTA_NEGRA:
            self.__lista_activa = tipo_lista
            self.__lista_negra: list[DireccionMac] = []

        if tipo_lista == TipoLista.LISTA_BLANCA:
            self.__lista_activa = tipo_lista
            self.__lista_blanca: list[DireccionMac] = []

    def añadir_direccion_a_lista(self, direccion: DireccionMac, tipo_lista: TipoLista) -> None:
        if tipo_lista == TipoLista.LISTA_NEGRA:
            if direccion in self.__lista_negra:
                raise PuntoAccesoError('La dirección ya está añadida en la lista negra')
            
            self.__lista_negra.append(direccion)

        if tipo_lista == TipoLista.LISTA_BLANCA:
            if direccion in self.__lista_blanca:
                raise PuntoAccesoError('La dirección ya está añadida en la lista blanca')
            
            self.__lista_blanca.append(direccion)

        if tipo_lista == TipoLista.NINGUNA:
            raise PuntoAccesoError('El filtrado esta desactivado')


    def conectar_equipo(self, direccion: DireccionMac) -> None:
        if direccion in self.__equipos_conectados:
            raise PuntoAccesoError('El equipo ya está conectado')
        
        self.__equipos_conectados.append(direccion)

        if self.__lista_activa == TipoLista.LISTA_NEGRA:
            if direccion in self.__lista_negra:
                raise PuntoAccesoError('El equipo no puede conectarse porque la dirección esta en la lista negra')
            else:
                print('Equipo conectado')
        
        if self.__lista_activa == TipoLista.LISTA_BLANCA:
            if direccion not in self.__lista_blanca:
                raise PuntoAccesoError('El equipo no puede conectarse porque la dirección no esta en la lista blanca')
            else:
                print('Equipo conectado')
    

class PuntoAccesoError(Exception):
    pass

if __name__ == "__main__":
    pass