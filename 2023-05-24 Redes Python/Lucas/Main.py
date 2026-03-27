from PuntoAcceso import *
from DireccionMac import *


def main():
    # print('hola')
    # hola = PuntoAcceso()
    # print(hola.devolverLista())
    nuevo_direccion_mac = DireccionMac("11:11:11:11:11:11")
    nuevo_punto_acceso = PuntoAcceso() 
    imprimir_menu()
    probar_menu(3,nuevo_punto_acceso,nuevo_direccion_mac)
    probar_menu(1,nuevo_punto_acceso,nuevo_direccion_mac)

    #pasar por parametro la seleccion de menu a comprobar 

def imprimir_menu():
    print('Menu FILTRADO DE DIRECCIONES MAC:')
    # mostrar lista negra
    print('1. Mostrar direcciones bloqueadas por lista negra')
    print('2. Activar la lista negra')
    print('3. Añadir direccion a lista negra')
    # mostrar lista de equipos conectados
    print('4. Mostrar equipos conectados al punto de acceso')
    print('5. conectar equipo al punto de acceso')
    # mostrar lista blanca
    print('6. Mostrar direcciones permitidas en la lista blanca')
    print('7. Activar la lista blanca')
    print('8. añadir direccion permitida a la lista blanca')
    print('9. Salir.')


def probar_menu(numero_seleccion_a_probar, punto_acceso: PuntoAcceso, direccion_mac: DireccionMac):


    if numero_seleccion_a_probar == 1:#Mostrar direcciones bloqueadas por lista negra
        lista_devolver = punto_acceso.devolver_lista_negra()
        print(lista_devolver)
    if numero_seleccion_a_probar == 2:#Activar la lista negra'
        punto_acceso.activar_lista_negra()
    if numero_seleccion_a_probar == 3:#Añadir direccion a lista negra
        #def añadir_direccion_lista_negra(self,direccion_mac: DireccionMac):
        print(punto_acceso.añadir_direccion_lista_negra(direccion_mac.devolver_direccion_mac()))
        
    if numero_seleccion_a_probar == 4:#Mostrar equipos conectados al punto de acceso
        lista_devolver_equipos = punto_acceso.devolver__equipos_conectados()
        print(lista_devolver_equipos)
    if numero_seleccion_a_probar == 5:#conectar equipo al punto de acceso
        punto_acceso.conectar_equipo(direccion_mac)
    if numero_seleccion_a_probar == 6:#Mostrar direcciones permitidas en la lista blanca'
        print(punto_acceso.devolver_lista_blanca())
    if numero_seleccion_a_probar == 7:#Activar la lista blanca
        punto_acceso.activar_lista_blanca()
    if numero_seleccion_a_probar == 8:#añadir direccion permitida a lista blanca 
        print(punto_acceso.añadir_direccion_lista_blanca(direccion_mac.devolver_direccion_mac()))
        
    if numero_seleccion_a_probar == 9:
        print("saliendo del programa")
        exit



if __name__ == "__main__":
    main()
