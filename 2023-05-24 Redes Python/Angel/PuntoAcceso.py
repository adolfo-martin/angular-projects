from enum import Enum, auto

from DireccionMac import DireccionMac

class TipoLista(Enum):
    NINGUNA = auto()
    LISTA_BLANCA = auto()
    LISTA_NEGRA = auto()

class PuntoAcceso():

    def __init__(self, __lista_activa: TipoLista, lista_negra: list[DireccionMac], lista_blanca: list[DireccionMac], equipos_conectados: list[DireccionMac]):
        self.__lista_activa = self.activar_lista(__lista_activa)
        self.__lista_negra = lista_negra
        self.__lista_blanca = lista_blanca
        self.__equipos_conectados = equipos_conectados


    @property
    def __lista_activa(self) -> TipoLista:
        return(self.__lista_activa)


    @property
    def lista_negra(self) -> list[DireccionMac]:
        return(self.__lista_negra)
    

    @property
    def lista_blanca(self) -> list[DireccionMac]:
        return(self.__lista_blanca)
    

    @property
    def equipos_conectados(self) -> list[DireccionMac]:
        return(self.__equipos_conectados)


    def activar_lista(tipo_lista:TipoLista) -> None:
        tipo_lista.NINGUNA


    def añadir_direccion_a_lista(self ,direccion:DireccionMac, tipo_lista:TipoLista) -> None:
        if tipo_lista == TipoLista.LISTA_NEGRA:
            self.lista_negra.append(direccion)

        elif tipo_lista == TipoLista.LISTA_BLANCA:
            self.lista_blanca.append(direccion)
        
        else:
            PuntoAccesoError("No hay un tipo lista asignado")


    def conectar_equipo(self, direccion:DireccionMac) -> None:
        for equipo in self.lista_blanca:
            if equipo.direccion == direccion.direccion:
                self.equipos_conectados.append(direccion)

        for equipo in self.lista_negra:
            if equipo.direccion == direccion.direccion:
                PuntoAccesoError(f"La direccion [{direccion.direccion}] esta en la lista negra")

        PuntoAccesoError(f"Error al conectar el equipo con la ip: {direccion.direccion}")


    

class PuntoAccesoError(Exception):
    pass


#listaBlanca = [DireccionMac("11:11:11:11:11:11"), DireccionMac("21:11:11:11:11:11"), DireccionMac("31:11:11:11:11:11")]
#listaNegra = [DireccionMac("12:11:11:11:11:11"), DireccionMac("22:11:11:11:11:11"), DireccionMac("32:11:11:11:11:11")]
#listaEquiposConectados = []
#listaActiva: TipoLista.NINGUNA

#punto = PuntoAcceso(listaActiva, listaBlanca, listaNegra, listaEquiposConectados)

#punto.conectar_equipo(DireccionMac("11:11:11:11:11:11"))

#print(listaEquiposConectados[0])