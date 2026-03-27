from enum import Enum, auto
from DireccionMac import DireccionMac

class TipoLista(Enum):
    NINGUNA = auto()
    LISTA_BLANCA = auto()
    LISTA_NEGRA = auto()


class PuntoAcesso: 

    def __init__(self) -> None:
        self.__lista_activa = TipoLista.NINGUNA
        self.__lista_negra = []
        self.__lista_blanca = []
        self.__equipos_conectados = []
        
        
    def activar_lista(self, tipo:TipoLista) -> None: 
        self.__lista_activa = tipo
        
    
    @property
    def lista_negra(self) -> list[DireccionMac]:
        return self.__lista_negra
    
    @property  
    def lista_blanca(self) -> list[DireccionMac]:
        return self.__lista_blanca 
        
    @property    
    def equipos_conectados(self) -> list[DireccionMac]:
        return self.__equipos_conectados   
    
    @property
    def lista_activa(self) -> TipoLista:
        return self.__lista_activa 
    
    def comprobar_direccion_en_equipos_conectados(self, direccion:DireccionMac) -> bool:
        equipos_conectados = self.__equipos_conectados
        
        for equipo in equipos_conectados:
            if direccion.__eq__(equipo):
                return True
           
        return False
        
    #PARA NO REPETIDAS
    def comprobar_direccion_en_lista(self, direccion:DireccionMac,tipo_lista:TipoLista) -> bool:
        lista = []
      
        if tipo_lista == TipoLista.LISTA_BLANCA:
            lista = self.__lista_blanca
        elif tipo_lista == TipoLista.LISTA_NEGRA:
            lista = self.__lista_negra
      
        for i in range(0,len(lista)):
            if direccion.__eq__(lista[i]):
                return True
            else: 
                return False
        return False
        
        
    def añadir_direccion_a_lista(self, direccion:DireccionMac, tipo_lista:TipoLista) -> None: 
        if tipo_lista != TipoLista.LISTA_BLANCA and tipo_lista != TipoLista.LISTA_NEGRA:
            raise PuntoAcessoError("El tipo de lista introducido no es correcto.") 
        
        if self.comprobar_direccion_en_lista(direccion,tipo_lista):
           raise PuntoAcessoError(f"La direccion {direccion} ya esta en la lista {tipo_lista}")
        
        if tipo_lista == TipoLista.LISTA_BLANCA: 
            self.__lista_blanca.append(direccion)
            
        if tipo_lista == TipoLista.LISTA_NEGRA: 
            self.__lista_negra.append(direccion)
            
            
    def conectar_equipo(self, direccion:DireccionMac) -> None: 
        #SI NO HAY FILTRO AÑADIMOS 
        if self.comprobar_direccion_en_equipos_conectados(direccion):
            raise PuntoAcessoError(f"La direccion {direccion} ya esta conectada al punto de acceso.")
        else:
            if self.__lista_activa == TipoLista.NINGUNA: 
                self.__equipos_conectados.append(direccion)
            #LISTA NEGRA    
            elif self.__lista_activa == TipoLista.LISTA_NEGRA: 
                #SI ESTA EN LA LISTA EXCEPCION 
                if self.comprobar_direccion_en_lista(direccion,TipoLista.LISTA_NEGRA):
                    raise PuntoAcessoError(f"No se puede conectar. La dirección {direccion} esta en la lista negra")
                #SI NO ESTA EN LA LISTA AÑADIMOS 
                else: 
                    self.__equipos_conectados.append(direccion)
            #LISTA BLANCA        
            elif self.__lista_activa == TipoLista.LISTA_BLANCA:
                #SI ESTA EN LA LISTA AÑADIMOS
                if self.comprobar_direccion_en_lista(direccion, TipoLista.LISTA_BLANCA):
                    self.__equipos_conectados.append(direccion)
                #SI NO ESTA EN LA LISTA EXCEPCION
                else: 
                    raise PuntoAcessoError(f"No se puede conectar. La dirección {direccion} no esta en la lista blanca")
                
        
class PuntoAcessoError (Exception): 
    pass