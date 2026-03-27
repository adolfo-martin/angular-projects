# 16 Alejandro Juarez
import os
import sys
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

def mostrar_rutas(rutas):
    print(f'--------------------------------------RUTAS--------------------------------------')
    print(f'{'CIUDAD':15s}{'CIUDAD':15s}{'HORA':15s}{'HORA':15s}')
    print(f'{'SALIDA':15s}{'LLEGADA':15s}{'SALIDA':15s}{'LLEGADA':15s} {'PRECIO':15s}')
    print(f'{'------':15s}{'-------':15s}{'------':15s}{'-------':15s} {'------':15s}')


    for ruta in rutas:
        ciudad_salida = ruta['ciudad_salida']
        ciudad_llegada = ruta['ciudad_llegada']
        hora_salida = ruta['hora_salida']
        minuto_salida = ruta['minuto_salida']
        hora_llegada = ruta['duracion']
        precio = ruta['precio']

        print(f'{ciudad_salida:15s}{ciudad_llegada:15s}{hora_salida}:{minuto_salida:<13}{hora_llegada:<16}{precio:.2f}€')

def mostrar_rutas_de_una_ciudad(rutas):
    ciudad_pedida = input('Dime la ciudad de salida:')
    print(f'--------------------------------------RUTAS--------------------------------------')
    print(f'{'CIUDAD':15s}{'CIUDAD':15s}{'HORA':15s}{'HORA':15s}')
    print(f'{'SALIDA':15s}{'LLEGADA':15s}{'SALIDA':15s}{'LLEGADA':15s} {'PRECIO':15s}')
    print(f'{'------':15s}{'-------':15s}{'------':15s}{'-------':15s} {'------':15s}')
    for ruta in rutas:
        ciudad_salida = ruta['ciudad_salida']
        ciudad_llegada = ruta['ciudad_llegada']
        hora_salida = ruta['hora_salida']
        minuto_salida = ruta['minuto_salida']
        hora_llegada = ruta['duracion']
        precio = ruta['precio']
        if ciudad_pedida == ciudad_salida:
            print(f'{ciudad_salida:15s}{ciudad_llegada:15s}{hora_salida}:{minuto_salida:<13}{hora_llegada:<16}{precio:.2f}€')

def reservar_billete_directo(rutas):
    ciudad_salida_pedida = input('Dime la ciudad de salida del billete:')

    ciudad_llegada_pedida = input('Dime la ciudad de llegada del billete:')

    cantidad_billetes = int(input('Dime la cantidad de billetes:'))

    for ruta in rutas:
        if ruta['ciudad_salida'] == ciudad_salida_pedida and ruta['ciudad_llegada'] == ciudad_llegada_pedida:
            print(f'Se han reservado {cantidad_billetes} billetes entre {ciudad_salida_pedida} y {ciudad_llegada_pedida}')

def mostrar_billetes_reservados(rutas):
    pass

def cerrar_el_aplicativo():
    print('Saliendo....')
    sys.exit()

print('------------------ AUTOBUSES ARCAS ------------------')
print('1) Mostrar rutas.')
print('2) Mostrar rutas que salen de una ciudad.')
print('3) Reservar billetes directo entre ciudades.')
print('4) Mostrar billetes reservados.')
print('5) Cerrar el aplicativo')
print()

opcion = 0
while opcion != 5:
    opcion = int(input('Selecciona la opción:'))
    if opcion == 1:
        mostrar_rutas(rutas)
    elif opcion == 2:
        mostrar_rutas_de_una_ciudad(rutas)
    elif opcion == 3:
        reservar_billete_directo(rutas)
    elif opcion == 4:
        mostrar_billetes_reservados(rutas)
    elif opcion == 5:
        cerrar_el_aplicativo
    else:
        print('Has introducido una opción incorrecta')