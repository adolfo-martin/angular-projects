# fredy
import os, sys
os.system('cls')


rutas = [
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

def mostrar_menu_y_pedir_opcion():
    while True:
        print('-------------------------------- AUTOBUSES ARCAS --------------------------------')
        print('1) Mostrar rutas.')
        print('2) Mostrar rutas que salen de una ciudad.')
        print('3) Reservar billete directo entre ciudades.')
        print('4) Mostrar billetes reservados.')
        print('5) Cerrar el aplicativo.\n')

        opcion = input('Selecciona la opción: \n')

        match(opcion):
            case '1':
                mostrar_rutas(rutas)
            case '2':
                mostrar_ruta_salida_ciudad(rutas)
            case '3':
                reservar_billete_directo(rutas)
            case '4':
                pass
            case '5':
                sys.exit()    




def mostrar_rutas(rutas):
    mostrar_rutas = '' 
    for ruta in rutas:
        mostrar_rutas += f'\n{ruta['ciudad_salida']:15s}{ruta['ciudad_llegada']:16s}{ruta['hora_salida']}{':'}{str(ruta['minuto_salida']):12s}{str(ruta['duracion']):15s}{ruta['precio']}'
    print('---------------------------- RUTAS ----------------------------\n')
    print(f'{'CIUDAD SALIDA':15s}{'CIUDAD LLEGADA':16s}{'HORA SALIDA':14s}{'HORA LLEGADA':15s}{'PRECIO'}')
    print('-------------- -------------- -------------- -------------- --------------')
    print(mostrar_rutas)
    
def calcular_hora_llegada():
    hora_llegada = []
    for ruta in rutas:
        hora = ruta['hora_salida']
        minutos = ruta['minuto_salida']
        duracion = ruta['duracion']
        minutos_completos = minutos + duracion
        if minutos_completos > 59:
            hora += 1
            minutos = 0
        else:
            pass

    print(minutos_completos)

def mostrar_ruta_salida_ciudad(rutas):
    rutas_salidas = []
    mostrar_rutas = ''
    ciudad_salida = input('Dime la ciudad de salida: ')
    contador = 0
    for ruta in rutas:
        if ruta['ciudad_salida'] == ciudad_salida:
            rutas_salidas.append(ruta)
        else:
            contador += 1
    if contador != 11:
        print('---------------------------- RUTAS ----------------------------\n')
        print(f'{'CIUDAD SALIDA':15s}{'CIUDAD LLEGADA':16s}{'HORA SALIDA':14s}{'HORA LLEGADA':15s}{'PRECIO'}')
        print('-------------- -------------- -------------- -------------- --------------')
        for ruta in rutas_salidas:
            mostrar_rutas += f'\n{ruta['ciudad_salida']:15s}{ruta['ciudad_llegada']:16s}{ruta['hora_salida']}{':'}{str(ruta['minuto_salida']):12s}{str(ruta['duracion']):15s}{ruta['precio']}'
        print(mostrar_rutas)
    else:
         print(f'Autobuses Arcas no ofrece rutas con salida desde {ciudad_salida}')



def reservar_billete_directo(rutas):
    ciudad_salida = input('Dime la ciudad de salida: ')
    ciudad_llegada = input('Dime la ciudad de llegada: ')
    cantidad_billetes = input('Dime la cantidad de billetes: ')
    contador = 0
    for ruta in rutas:
        if ruta['ciudad_salida'] == ciudad_salida and ruta['ciudad_llegada'] == ciudad_llegada:
            print(f'Se han reservado {cantidad_billetes} billetes entre {ciudad_salida} y {ciudad_llegada}')
        else:
            contador += 1
    if contador == 11:
        print(f'Autobuses Arcas no ofrece una ruta directa entre {ciudad_salida} y {ciudad_llegada}')

mostrar_menu_y_pedir_opcion()
