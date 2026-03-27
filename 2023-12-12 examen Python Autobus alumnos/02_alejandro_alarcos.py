# 02 alejandro alarcos
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


def mostrar_rutas(rutas):
    print(f'--------------------------------RUTAS-------------------------------------------')
    print(f'{'CIUDAD':15}{'CIUDAD':15}{'HORA':15}{'HORA':15}{'PRECIO':15}')
    print(f'{'SALIDA':15}{'LLEGADA':15}{'SALIDA':15}{'LLEGADA':15}')
    print('---------------------------------------------------------------------------------')
    for ruta in rutas:
        hora_salida_final = str(ruta['hora_salida']) + ':'+ str(ruta['minuto_salida'])
        
        # if ruta['duracion'] > 59:
        #     hora_llegada = ruta['hora_salida'] + (ruta['duracion']/60)
        # else:
        #     hora_llegada = ruta['hora_salida'] + ruta['duracion']
        print(f'{ruta['ciudad_salida']:15}{ruta['ciudad_llegada']:15}{hora_salida_final:15}{'...':15}{ruta['precio']:5}')

def mostrar_rutas_por_ciudad(rutas):
    ciudad = input('Dime la ciudad de salida: ')
    print(f'--------------------------------RUTAS-------------------------------------------')
    print(f'{'CIUDAD':15}{'CIUDAD':15}{'HORA':15}{'HORA':15}{'PRECIO':15}')
    print(f'{'SALIDA':15}{'LLEGADA':15}{'SALIDA':15}{'LLEGADA':15}')
    print('---------------------------------------------------------------------------------')

    for ruta in rutas:
        if ruta['ciudad_salida'] == ciudad:
            hora_salida_final = str(ruta['hora_salida']) + ':'+ str(ruta['minuto_salida'])
            print(f'{ruta['ciudad_salida']:15}{ruta['ciudad_llegada']:15}{hora_salida_final:15}{'...':15}{ruta['precio']:5}')
    else:
        print(f'Autobuses Arcas no ofrece rutas con salida desde {ciudad}')
                
billetes = []

def reservar_billete(billetes, rutas):
    ciudad1 = input('Dime la ciudad de salida: ')
    ciudad2 = input('Dime la ciudad de llegada: ')
    cantidad = input('Dime la cantidad de billetes: ')
    for ruta in rutas:
        billetes_nuevo ={'ciudad_salida': '', 'ciudad_llegada': '', 'cantidad_billetes': ''}
        
        if ciudad1 == ruta['ciudad_salida']  and ciudad2 == ruta['ciudad_llegada']:
            billetes_nuevo['ciudad_salida'] = ciudad1
            billetes_nuevo['ciudad_llegada'] = ciudad2
            billetes_nuevo['cantidad_billetes'] = cantidad
            billetes.append(billetes_nuevo)
        
def mostrar_billetes(billetes, rutas):
    if billetes == []:
        print('No hay reservas')
    else:     
        for billete in billetes:
            cantidad = billete['cantidad_billetes']
            for ruta in rutas:
                if billete['ciudad_salida'] == ruta['ciudad_salida'] and billete['ciudad_llegada'] == ruta['ciudad_llegada']:
                    print(f'--------------------------------RUTAS-------------------------------------------')
                    print(f'{'CIUDAD':15}{'CIUDAD':15}{'HORA':15}{'HORA':15}{'PRECIO':15}{'CANTIDAD':15}')
                    print(f'{'SALIDA':15}{'LLEGADA':15}{'SALIDA':15}{'LLEGADA':15}')
                    print('---------------------------------------------------------------------------------')
                    hora_salida_final = str(ruta['hora_salida']) + ':'+ str(ruta['minuto_salida'])
                    print(f'{ruta['ciudad_salida']:15}{ruta['ciudad_llegada']:15}{hora_salida_final:15}{'...':15}{ruta['precio']}{cantidad:15}')

    
while True:
    print('----------------------AUTOBUSES ARCAS---------------------')
    print('1) Mostrar rutas.')
    print('2) Mostrar rutas que salen de una ciudad.')
    print('3) Reservar billete directo entre ciudades')
    print('4) Mostrar billetes reservados.')
    print('5) Cerrar el aplicativo.')

    opcion = input('Selecciona una opcion: ')

    match opcion:
        case '1':
            print(mostrar_rutas(rutas))
        case '2': 
            print(mostrar_rutas_por_ciudad(rutas))
        case '3': 
            print(reservar_billete(billetes, rutas))
        case '4':
            print(mostrar_billetes(billetes, rutas))
        case '5':
            sys.exit()