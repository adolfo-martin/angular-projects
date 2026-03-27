from DireccionMac import *
from PuntoAcceso import *
from TipoLista import *

'''Inicializo un Punto de acceso para trabajar con él'''
lista_negra = []
lista_blanca =[]
equipos=[]
pa=PuntoAcceso(lista_negra,lista_blanca,equipos)

'''Métodos'''
def mostrarMenu() -> None:
    print('\n\n\nMenu FILTRADO DE DIRECCIONES MAC:')
    print('\t1. Mostrar direcciones bloqueadas por la lista negra.')
    print('\t2. Activar la lista negra.')
    print('\t3. Añadir direccion a la lista negra.')
    print('\t4. Mostrar equipos conectados al punto de acceso.')
    print('\t5. Conectar el equipo al punto de acceso.')
    print('\t6. Mostrar direcciones permitidas por la lista blanca.')
    print('\t7. Activar la lista blanca.')
    print('\t8. Añadir dirección a la lista blanca.')
    print('\t9. Salir')


def pedirOpcion():
    return input('[Opción] -> ')

def mostrar_lista_negra():
    print('\n--Direcciones de la LISTA NEGRA--')
    for direccion in pa.lista_negra:
        print(direccion)

def activar_lista_negra():
    pa.activar_lista(TipoLista.LISTA_NEGRA)
    print('La lista negra ha sido activada')

def añadir_direccion_a_listaNegra():
    try:
        dir = input('Dime una direccion: ')
        direccion = DireccionMac(dir)
        pa.añadir_direccion_a_lista(direccion, TipoLista.LISTA_NEGRA)
        print(f'Dirección: {dir} añadida correctamente')
    except DireccionMacError as error:
        print(error)

def mostrar_equipos_conectados():
    # try:
    print('--Equipos conectados--')
    for direccion in pa.equiposConectados:
        print(direccion)

def contetar_equipo():
    try:
        dir= input('Dime la direccion MAC del equipo: ')
        direccion = DireccionMac(dir)
        pa.conectar_equipo(direccion)
        print(f'Equipo {dir} conectado correctamente')
    except DireccionMacError as error:
        print(error)

def mostrar_lista_blanca():
    print('\n--Direcciones de la LISTA BLANCA--')
    for direccion in pa.lista_blanca:
        print(direccion)

def activar_lista_blanca():
    pa.activar_lista(TipoLista.LISTA_BLANCA)
    print('La lista blanca ha sido activada')

def añadir_direccion_a_lista_blanca():
    try:
        dir = input('Dime una direccion: ')
        direccion = DireccionMac(dir)
        pa.añadir_direccion_a_lista(direccion, TipoLista.LISTA_BLANCA)
        print(f'Dirección: {dir} añadida correctamente')
    except DireccionMacError as error:
        print(error)



'''Main:'''
if __name__ == '__main__':
    while True:
        mostrarMenu()
        opcion = pedirOpcion()
        if opcion == '1':
            mostrar_lista_negra()
        elif opcion == '2':
            activar_lista_negra()
        elif opcion == '3':
            añadir_direccion_a_listaNegra()
        elif opcion =='4':
            mostrar_equipos_conectados()
        elif opcion =='5':
            contetar_equipo()
        elif opcion == '6':
            mostrar_lista_blanca()
        elif opcion == '7':
            activar_lista_blanca()
        elif opcion == '8':
            añadir_direccion_a_lista_blanca()
        elif opcion == '9':
            break
        else:
            print('ERROR: introduce una opción válida')
