from DireccionMac import DireccionMac, DireccionMacError
from TipoLista import TipoLista

class PuntoAcceso:

    def __init__(self) -> None:
        self.__lista_activa = TipoLista()
        self.__lista_negra = []
        self.__lista_blanca = []
        self.__equipos_conectados = []
        
    @property
    def lista_activa(self) -> TipoLista:
        return self.__lista_activa
    
    @property
    def lista_negra(self) -> list:
        return self.__lista_negra
    
    @property
    def lista_blanca(self) -> list:
        return self.__lista_blanca

    @property
    def equipos_conectados(self) -> list:
        return self.__equipos_conectados

    def activar_lista(self, tipo_lista : TipoLista) -> None:
        self.__lista_activa = tipo_lista

    def añadir_direccion_a_lista(self, direccion : DireccionMac, tipo_lista : TipoLista) -> None:
        if tipo_lista is TipoLista.LISTA_BLANCA:
            self.__lista_blanca.append(direccion)
        elif tipo_lista is TipoLista.LISTA_NEGRA:
            self.__lista_negra.append(direccion)
        else:
            raise PuntoAccesoError('Error: lista no seleccionada')

    def conectar_equipo(self, direccion : DireccionMac) -> None:
        if not DireccionMac.es_direccion_correcta(direccion):
            raise DireccionMacError()
        
        self.__equipos_conectados.append(direccion)

    def mostrar_lista_negra(self) -> None:
        if len(self.__lista_negra) == 0:
            print('Lista vacia')
        else:
            for direccion in self.__lista_negra:
                print (f'{direccion}\n')

    def mostrar_lista_blanca(self) -> None:
        if len(self.__lista_blanca) == 0:
            print('Lista vacia')
        else:
            for direccion in self.__lista_blanca:
                print (f'{direccion}\n')

    def mostrar_equipos_conectados(self) -> None:
        if len(self.__equipos_conectados) == 0:
            print('Lista vacia')
        else:
            for direccion in self.__equipos_conectados:
                print (f'{direccion}\n')

    def existe_en_lista_negra(self, direccion : DireccionMac) -> bool:
        for d in self.__lista_negra:
            if d.__eq__(direccion):
                return True
            
        return False

    def existe_en_lista_blanca(self, direccion : DireccionMac) -> bool:
        for d in self.__lista_blanca:
            if d.__eq__(direccion):
                return True
            
        return False


    def asignar_tipo(arg : str) -> TipoLista:
        arg.capitalize()
        if arg == 'BLANCA': 
            return TipoLista.LISTA_BLANCA
        elif arg == 'NEGRA':
            return TipoLista.LISTA_NEGRA
        else:
            return TipoLista.NINGUNA
        

class PuntoAccesoError(Exception):
    pass