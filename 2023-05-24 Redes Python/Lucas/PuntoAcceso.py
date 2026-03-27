from TipoLista import *
from DireccionMac import *

class PuntoAcceso:
 
    def __init__(self) -> None:
        self.__lista_activa=TipoLista.ninguna
        self.__lista_negra=[]
        self.__lista_blanca=[]
        self.__equipos_conectados=[0,4,435,43]
    #contiene valores aleatorios para la comprobacion en el main-
    # -dichos valores fueron eliminados tras las comprobaciones

    
    def devolver_lista_negra(self):
        return self.__lista_negra
        #print(self.__lista_negra)
    def devolver_lista_blanca(self):

        return self.__lista_blanca
    
    def devolver__equipos_conectados(self):
        return self.__equipos_conectados
    
    def activar_lista_negra(self):
        self.__lista_activa=TipoLista.LISTA_NEGRA
        print('lista negra activada')

    def activar_lista_blanca(self):
        self.__lista_activa=TipoLista.LISTA_BLANCA
        print('lista blanca activada')
        
    def desactivar_filtrado(self):
        self.__lista_activa=TipoLista.ninguna

    def añadir_direccion_lista_negra(self,direccion_mac: DireccionMac):
     
        self.__lista_negra.append(direccion_mac)
    def añadir_direccion_lista_blanca(self,direccion_mac: DireccionMac):
        self.__lista_blanca.append(direccion_mac)
        
    def añadir_direccion_lista_equipos_conectados(self,direccion_mac: DireccionMac):
        self.__equipos_conectados.append(direccion_mac)
        

    def conectar_equipo(self,Direccion_mac: DireccionMac):
        direccion_a_comparar = Direccion_mac.devolver_direccion_mac

        if self.__lista_activa == TipoLista.ninguna:
            # se añade a la lista de equipos conectados
            self.añadir_direccion_lista_equipos_conectados(Direccion_mac)
            print('equipo conectado')
        if self.__lista_activa == TipoLista.LISTA_NEGRA:
            for lista in self.__lista_negra:
                if Direccion_mac.devolver_direccion_mac() != lista.devolver_direccion_mac():
                     self.añadir_direccion_lista_equipos_conectados
                     print('equipo conectado')
                else: print('no es posible conectar este equipo')     

        if self.__lista_activa == TipoLista.LISTA_BLANCA:
            # si está dentro de la lista se añade a lista de equpos, si no no
            for lista in self.__lista_blanca:
                if Direccion_mac.devolver_direccion_mac() == lista.devolver_direccion_mac():
                     self.añadir_direccion_lista_equipos_conectados
                     print('equipo conectado')
                else: print('no es posible conectar este equipo')  
        