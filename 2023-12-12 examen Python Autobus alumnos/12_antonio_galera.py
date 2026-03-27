# Antonio Galera
import os, sys
os.system('cls')


RUTAS = [
    { 'id': 'ma-mu', 'ciudad_salida': 'Madrid',    'ciudad_llegada': 'Murcia',    'hora_salida': 8,  'minuto_salida': 15 ,'duracion': 330, 'precio': 58.75},
    { 'id': 'mu-lo', 'ciudad_salida': 'Murcia',    'ciudad_llegada': 'Lorca',     'hora_salida': 7,  'minuto_salida': 45 ,'duracion': 55,  'precio': 7.20},
    { 'id': 'sa-vi', 'ciudad_salida': 'Santander', 'ciudad_llegada': 'Vigo',      'hora_salida': 17, 'minuto_salida': 40 ,'duracion': 305, 'precio': 47.90},
    { 'id': 'ma-ba', 'ciudad_salida': 'Madrid',    'ciudad_llegada': 'Barcelona', 'hora_salida': 9,  'minuto_salida': 35 ,'duracion': 395, 'precio': 71.80},
    { 'id': 'lo-to', 'ciudad_salida': 'Lorca',     'ciudad_llegada': 'Totana',    'hora_salida': 6,  'minuto_salida': 35 ,'duracion': 20,  'precio': 2.90},
    { 'id': 'ba-sa', 'ciudad_salida': 'Barcelona', 'ciudad_llegada': 'Santander', 'hora_salida': 11, 'minuto_salida': 20 ,'duracion': 355, 'precio': 65.70},
    { 'id': 'to-al', 'ciudad_salida': 'Totana',    'ciudad_llegada': 'Alhama',    'hora_salida': 6,  'minuto_salida': 55 ,'duracion': 15,  'precio': 2.15},
    { 'id': 'mu-ba', 'ciudad_salida': 'Murcia',    'ciudad_llegada': 'Barcelona', 'hora_salida': 8,  'minuto_salida': 15 ,'duracion': 475, 'precio': 77.35},
    { 'id': 'al-mu', 'ciudad_salida': 'Alhama',    'ciudad_llegada': 'Murcia',    'hora_salida': 7,  'minuto_salida': 10 ,'duracion': 30,  'precio': 4.25},
    { 'id': 'ba-vi', 'ciudad_salida': 'Barcelona', 'ciudad_llegada': 'Vigo',      'hora_salida': 6, 'minuto_salida':  15 ,'duracion': 865, 'precio': 92.30},
    { 'id': 'vi-ma', 'ciudad_salida': 'Vigo',      'ciudad_llegada': 'Madrid',    'hora_salida': 12, 'minuto_salida': 20 ,'duracion': 360, 'precio': 55.85},
]

BILLETE = []

def mostrar_rutas(RUTAS):
    menu = ''
    menu += '----------------------------------- RUTAS -------------------------------------\n'
    menu += f'{'CIUDAD':15s} {'CIUDAD':15s} {'HORA':15s} {'HORA':15s}\n'
    menu += f'{'SALIDA':15s} {'LLEGADA':15s} {'SALIDA':15s} {'LLEGADA':15s} {'PRECIO':15s}\n'
    menu += f'{'-------------- --------------- -------------    ----------     ---------'}\n'
    for ruta in RUTAS:
        menu += f'{ruta['ciudad_salida']:15s}  {ruta['ciudad_llegada']:15s}  {ruta['hora_salida']} : {ruta['minuto_salida']}  {ruta['precio']:24.0f}\n'

    return menu


def mostrar_rutas_salida_de_una_ciudad(RUTAS):
    ciudad = input('Dime la ciudad de salida: ')
    salidas = ''

    for ruta in RUTAS:
        if ruta['ciudad_salida'] == ciudad:
            salidas += '----------------------------------- RUTAS -------------------------------------\n'
            salidas += f'{'CIUDAD':15s} {'CIUDAD':15s} {'HORA':15s} {'HORA':15s}\n'
            salidas += f'{'SALIDA':15s} {'LLEGADA':15s} {'SALIDA':15s} {'LLEGADA':15s} {'PRECIO':15s}\n'
            salidas += f'{'-------------- --------------- -------------    ----------     ---------'}\n'
            break

    for ruta in RUTAS:
        if ruta['ciudad_salida'] == ciudad:
            salidas += f'{ruta['ciudad_salida']:15s}  {ruta['ciudad_llegada']:15s}  {ruta['hora_salida']} : {ruta['minuto_salida']}  {ruta['precio']:24.0f}\n'
        # elif ruta['ciudad_salida'] != ciudad:
        #     salidas += f'Autobuses Arcas no ofrece rutas con salida desde {ciudad}\n'
        #     break

    return salidas


            
def reservar_billete_directo(RUTAS):
    ciudad_salida = input('Dime la ciudad de salida del billete: ')
    ciudad_llegada = input('Dime la ciudad de llegada del billete: ')
    cantidad_billetes = int(input('Dime la cantidad de billetes: '))
    resultado = ''

    for ruta in RUTAS:
        if ruta['ciudad_salida'] == ciudad_salida and ruta['ciudad_llegada'] == ciudad_llegada and cantidad_billetes > 0:
            BILLETE.append(ruta)
            resultado += f'Se han reservado {cantidad_billetes} billetes entre {ciudad_salida} y {ciudad_llegada}'
        # else:
        #     resultado += f'Autobuses Arcas no ofrece una ruta directa entre {ciudad_salida} y {ciudad_llegada}\n'
    
    return resultado


def mostrar_billetes_reservados():
    salida = ''

    if len(BILLETE) > 0:
        salida += f'Has reservdado {len(BILLETE)} billetes\n'
    else:
        salida += 'No hay reservas'

    return salida



def mostrar_menu_y_pedir_opcion():
    while True:
        print('-------- AUTOBUSES ARCAS --------')
        print('1) Mostrar rutas.')
        print('2) Mostrar rutas que salen de una ciudad.')
        print('3) Reservar billete directo entre ciudades.')
        print('4) Mostrar billetes reservados.')
        print('5) Cerrar el aplicativo.')
        print()
        opcion = int(input('Selecciona la opción: '))
        print()

        match opcion:
            case 1:
                print(mostrar_rutas(RUTAS))
                print()
            case 2:
                print(mostrar_rutas_salida_de_una_ciudad(RUTAS))
                print()
            case 3:
                print(reservar_billete_directo(RUTAS))
                print()
            case 4:
                print(mostrar_billetes_reservados())
                print()
            case 5:
                print('Saliendo...')
                sys.exit()
            case _:
                print('Selecciona una opción válida.')

mostrar_menu_y_pedir_opcion()