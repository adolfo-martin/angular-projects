# 26_Diego_Sanchez

import os
os.system('cls')

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

reservas = [

]

def mostrar_rutas(rutas):
    print(f'{'CIUDAD SALIDA':15s} {'CIUDAD LLEGADA':15s} {'HORA SALIDA':15s} {'HORA LLEGADA':15s} {'PRECIO':15s}')
    for ruta in rutas:
        ciudad_salida = ruta['ciudad_salida']
        ciudad_llegada = ruta['ciudad_llegada']
        hora_salida = ruta['hora_salida']
        minuto_salida = ruta['minuto_salida'] 
        hora_llegada = ruta['duracion']
        precio = ruta['precio']

        print(f'{ciudad_salida:15s} {ciudad_llegada:15s} {hora_salida}:{minuto_salida:<10} {hora_llegada:>10} {precio:>10}€')

def mostrar_rutas_que_salen_de_una_ciudad(rutas):
    ciudad = input('Dime la ciudad de salida: ')
    for ruta in rutas:
        if ruta['ciudad_salida'] == ciudad:
            salida = True
            print(f'{ruta['ciudad_salida']:15s} {ruta['ciudad_llegada']:15s} {ruta['hora_salida']}:{ruta['minuto_salida']:<10} {ruta['duracion']:>10} {ruta['precio']:>10}')
        elif ruta['ciudad_salida'] != ciudad:
            salida = False
    if salida == True:
        print(None)
    else:
        print(f'Autobuses Arcas no ofrece rutas con salida {ciudad}')
            

def reservar_billetes(rutas):
    ciudad_salida = input('Dime la ciudad de salida del billete: ')
    ciudad_llegada = input('Dime la ciudad de llegada del billete: ')
    cantidad = int(input('Dime la cantidad de billetes: '))

    for ruta in rutas:
        
        if ruta['ciudad_salida'] == ciudad_salida and ruta['ciudad_llegada'] == ciudad_llegada:
            print(f'Se han reservado {cantidad} billetes entre {ciudad_salida} y {ciudad_llegada}')
            id = ruta['id']
            cantidad = cantidad
            billete_reservado = {
                'id' : id,
                'cantidad' : cantidad
            }
            reservas.append(billete_reservado)
        else:
            esFalso = True
    if esFalso == True:
        print(f'Autobuses Arcas no ofrece ruta directa entre {ciudad_salida} y {ciudad_llegada}')

def mostrar_billetes_reservados(reservas):
    for reserva in reservas:
        ...
    

                 
opcion = 0
print('-----------------------AUTOBUSES ARCAS-----------------------')
print('1) Mostrar ruta.')
print('2) Mostrar rutas que salen de una ciudad.')
print('3) Reservar billete directo entre ciudades.')
print('4) Mostrar billetes reservados.')
print('5) Cerrar aplicación.')
print()
while opcion!=5:
    opcion = int(input('Introduce una opcion: '))
    match(opcion):
        case 1:
            mostrar_rutas(rutas)
        case 2:
            mostrar_rutas_que_salen_de_una_ciudad(rutas)
        case 3:
            reservar_billetes(rutas)
        case 4:
            mostrar_billetes_reservados(reservas)
        case 5:
            print('SALIENDO...')
            sys.exit()
        case _:
            print('ERROR. La opción introducida no es valida')


