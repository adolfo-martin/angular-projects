from DireccionMac import DireccionMac
from ServidorDnsError import ServidorDnsError
from TipoLista import TipoLista


class PuntoAcceso:
    def __init__(self):
        self.__lista_activa: TipoLista.NINGUNA

        self.__lista_negra: list[DireccionMac]
        self.__lista_blanca: list[DireccionMac]
        self.__equipos_conectados: list[DireccionMac]

    
    @property
    def __lista_activa(self):
        return self.__lista_activa
    

    @property
    def __lista_negra(self):
        return self.__lista_negra
    
    
    # def __lista_negra(self, valor):
        # self.__lista_negra = valor
        # return self.__lista_negra


    @property
    def __lista_blanca(self):
        return self.__lista_blanca
    

    # def __lista_blanca(self, valor):
    #     self.__lista_blanca = valor
    #     return self.__lista_blanca
    

    @property
    def __equipos_conectados(self):
        return self.__equipos_conectados
    

    # def __equipos_conectados(self, valor):
    #     self.__equipos_conectados = valor
    #     return self.__equipos_conectados
    

    def activar_lista(tipo_lista: TipoLista) -> None:
        if tipo_lista.LISTA_BLANCA:
            PuntoAcceso.__lista_activa = tipo_lista.LISTA_BLANCA
        elif tipo_lista.LISTA_NEGRA:
            PuntoAcceso.__lista_activa = tipo_lista.LISTA_NEGRA


    def añadir_direccion_a_la_lista(direccion: DireccionMac, tipo_lista: TipoLista) -> None:
        if tipo_lista.LISTA_BLANCA:
            PuntoAcceso.__lista_blanca.append(direccion)
        elif tipo_lista.LISTA_NEGRA:
            PuntoAcceso.__lista_negra.append(direccion)



    def conectar_equipo(self, direccion: DireccionMac) -> None:
        if direccion.__eq__(PuntoAcceso.__lista_activa):
            self.__equipos_conectados.append(direccion)
        elif direccion.__eq__(PuntoAcceso.__lista_blanca):
            self.__equipos_blanco.append(direccion)
        else:
            raise ServidorDnsError(f"La dirección {direccion.__repr__}")


PuntoAcceso.añadir_direccion_a_la_lista(DireccionMac("11:11:11:11:11:11"), TipoLista.LISTA_BLANCA)
for lista in PuntoAcceso.__lista_blanca:
    print(lista.__repr__())