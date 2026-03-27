# 15 Juan Miguel Gonzalez

import os
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


print('------------------AUTOBUSES ARCAS------------------')
print('1) Mostrar rutas.')
print('2) Mostrar rutas que salen de una ciudad.')
print('3) Reservar billetes directo entre ciudades.')
print('4) Mostrar billetes reservados.')
print('5) Cerrar el aplicativo.')

opcion = int(input('Selecciona la opcion: '))
duraciones_horas = []
duraciones_minutos = []
for ruta in rutas:
    hora = 0
    minutos = 0
    if ruta['duracion'] >= 60:
        hora = ruta['duracion'] // 60
        minutos = ruta['duracion'] % 60
        hora = hora + ruta['hora_salida']
        minutos = minutos + ruta['minuto_salida']
        duraciones_horas.append(f'{hora:.0f}')
        duraciones_minutos.append(f'{minutos}')
    elif ruta['duracion'] < 60:
        hora = 0
        minutos = ruta['duracion']
        duraciones_horas.append(f'{hora:.0f}')
        duraciones_minutos.append(f'{minutos}') 
def mostrar_rutas():
    print('-----------------------RUTAS-----------------------')
    print(f"{'CIUDAD':15s}{'CIUDAD':15s}{'HORA':15s}{'HORA':15s}")
    print(f'{'SALIDA':15s}{'LLEGADA':15s}{'SALIDA':15s}{'LLEGADA':15s}{'PRECIO':15s}')
    print(f'------------------------------------------------------------------')
    i = 0
    for ruta in rutas:
        print(f'{ruta['ciudad_salida']:15s}{ruta['ciudad_llegada']:15s}{ruta['hora_salida']:0}:{ruta['minuto_salida']:.0f}         {duraciones_horas[i]}:{duraciones_minutos[i]}{ruta['precio']:8.2f}')
        i += 1

def mostrar_rutas_ciudad():
    ciudad = input('Dime una ciudad: ')
    i = -1
    for ruta in rutas:
        i += 1
        if ruta['ciudad_salida'] == ciudad:
            print(f'{ruta['ciudad_salida']:15s}{ruta['ciudad_llegada']:15s}{ruta['hora_salida']:0}:{ruta['minuto_salida']:.0f}         {duraciones_horas[i]}:{duraciones_minutos[i]}{ruta['precio']:8.2f}')

def reservar_billete():
    ciudad_ida = input('Dime la ciudad de salida: ')
    ciudad_llegada = input('Dime la ciudad de llegada: ')
    billetes = input('Dime la cantidad de billetes: ')
    comprados = 0
    for ruta in rutas:
        if ciudad_ida == ruta['ciudad_salida'] and ciudad_llegada == ruta['ciudad_llegada']:
            comprados = billetes
            print(billetes + ' billetes comprados')
        else:
            print('No existe esa ruta')
        return comprados
    
# comprados = reservar_billete()
    
# def mostrar_billetes():
#     return comprados



while opcion != 5:
    if opcion == 1:
        print(mostrar_rutas())
    elif opcion == 2:
        print('-----------------------RUTAS-----------------------')
        print(f'{'CIUDAD':15s}{'CIUDAD':15s}{'HORA':15s}{'HORA':15s}')
        print(f'{'SALIDA':15s}{'LLEGADA':15s}{'SALIDA':15s}{'LLEGADA':15s}{'PRECIO':15s}')
        print(f'------------------------------------------------------------------')
        print(mostrar_rutas_ciudad())
    elif opcion == 3:
        print(reservar_billete())
    elif opcion == 4:
        print(mostrar_billetes())
    elif opcion == 5:
        print('Has salido')

    
       

