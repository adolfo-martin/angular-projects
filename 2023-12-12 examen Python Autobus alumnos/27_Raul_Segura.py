# 27_Raul_Segura

import sys

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



def mostrar_rutas(rutas):
    for ruta in rutas:
        print(f' {ruta['ciudad_salida']} {ruta['ciudad_llegada']} {ruta['hora_salida']} {ruta['hora_llegada']} {ruta['precio']}')



def mostrar_que_salen_de_una_ciudad(rutas):
    salida=input('Dime la ciudad de salida: ')
    for ruta in rutas:
        if ruta['ciudad_salida']==salida:
            print(f' {ruta['ciudad_salida']} {ruta['ciudad_llegada']} {ruta['hora_salida']} {ruta['hora_llegada']} {ruta['precio']}')
        else:
            print('Autobuses Arcas no ofrece rutas con salida desde Salamanca')




def reservar_billete_directo_entre_ciudades(rutas):
    ciudad_salida=input('Dime la ciudad de salida:  ')
    ciudad_llegada=input('Dime la ciudad de llegada: ')
    billetes=input(int('Dime la cantidad de billetes: '))

    for ruta in rutas:
        if ruta['ciudad_salida']==ciudad_salida:
            ciudad_salida=ruta['ciudad_llegada']
            ruta['ciudad_llegada']=ciudad_llegada
            print(f'Se han reservado {billetes} entre {ciudad_salida} y {ciudad_llegada}')





def mostrar_billetes_reservados(rutas):
    for ruta in rutas:
        print(f' {ruta['ciudad_salida']} {ruta['ciudad_llegada']} {ruta['hora_salida']} {ruta['hora_llegada']} {ruta['precio']}')


while True:
    print('---------------AUTOBUSES ARCAS---------------')
    print('1) Mostrar rutas')
    print('2) Mostrar rutas que salen de una ciudad')
    print('3) Reservar billete directo entre ciudades.')
    print('4) Mostrar billeter reservados')
    print('5) Cerrar el aplicativo')

    opcion=input('Selecciona una opcion: ')

    match opcion:
        case '1' :
            print('-----------Rutas------------')
            mostrar_rutas(rutas)
            
        case '2':
            mostrar_que_salen_de_una_ciudad(rutas)

        case '3':
            reservar_billete_directo_entre_ciudades(rutas)
        case '4':
            pass
        case '5':
            sys.exit()
        case _:
            print ('Introduce una opcion correcta')

            
            
            
            