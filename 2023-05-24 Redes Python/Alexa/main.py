from DireccionMac import DireccionMac
from PuntoAcceso import PuntoAcceso
from PuntoAcceso import TipoLista

punto_acceso = PuntoAcceso()

print(punto_acceso.get_lista_activa)

punto_acceso.activar_lista(TipoLista.LISTA_BLANCA)
print(punto_acceso.get_lista_activa)

punto_acceso.añadir_direccion_a_lista(DireccionMac("22:44:55:66:66:77"), TipoLista.LISTA_BLANCA)
print(punto_acceso.get_lista_blanca)

lista = ["hola", "como", "22:44:55:66:66:77"]
print(lista.pop())

punto_acceso.conectar_equipo(DireccionMac("22:44:55:66:66:77"))
#sale excepcion
punto_acceso.añadir_direccion_a_lista(DireccionMac("22:44:55:66:66:77"), "hola")
