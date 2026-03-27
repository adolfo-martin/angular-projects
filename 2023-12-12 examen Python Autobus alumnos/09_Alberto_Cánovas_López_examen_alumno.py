# 09_Alberto_Cánovas_López

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



def mostrar_rutas(rutas):
    print('-----------------------------RUTAS-----------------------------------------')
    print(f'{'CIUDAD':15s}{'CIUDAD':15s}{'HORA':15s}{'HORA':15s}')
    print(f'{'SALIDA':15s}{'LLEGADA':15s}{'SALIDA':15s}{'LLEGADA':15s}{'PRECIO':15s}')
    print('-'*75)
    for i in range(0,len(rutas)):
        print(f'{rutas[i]['ciudad_salida']:15s}{rutas[i]['ciudad_llegada']:15s}{rutas[i]['hora_salida']}:{rutas[i]['minuto_salida']}            {rutas[i]['ciudad_salida']:10s}{rutas[i]['precio']:8.2f}')

#mostrar_rutas(rutas)

# def mostrar_rutas_ciudad_de_salida(rutas):
    # ciudad=input('Dime la ciudad de salida: ')
    # rutas_coincidentes=[]
    # for i in range(0,len(rutas)):
        # if rutas[i]['ciudad_salida']==ciudad:
            # return mostrar_rutas(rutas)
        # else:
            # return print(f'Autobuses Arcas no ofrece rutas con salida desde {ciudad}.')
        


def mostrar_rutas_ciudad_de_salida(rutas):
   ciudad=input('Dime la ciudad de salida: ')
   rutas_coincidentes=[]
   print('-----------------------------RUTAS-----------------------------------------')
   print(f'{'CIUDAD':15s}{'CIUDAD':15s}{'HORA':15s}{'HORA':15s}')
   print(f'{'SALIDA':15s}{'LLEGADA':15s}{'SALIDA':15s}{'LLEGADA':15s}{'PRECIO':15s}')
   print('-'*75)
   for ruta in rutas:
        if ruta['ciudad_salida']==ciudad:
            print(ruta)
           
            
   return rutas_coincidentes
        
#mostrar_rutas_ciudad_de_salida(rutas)

billete=[]
ciudad_salid=[]
ciudad_llegad=[]

def reservar_billete_directo(rutas):
    ciudad_salida=input('Dime la ciudad de salida del billete: ')
    ciudad_llegada=input('Dime la ciudad de llegada del billete: ')
    cantidad_billetes=input('Dime la cantidad de billetes: ')
    billete.append(cantidad_billetes)
    ciudad_llegad.append(ciudad_llegada)
    ciudad_salid.append(ciudad_salida)

    for ruta in rutas:
        for ruta in rutas:
            if ruta['ciudad_salida']==ciudad_salida:
                continue
            if ruta['ciudad_llegada']==ciudad_llegada:
                return print(f'Se han reservado {cantidad_billetes} billetes entre {ciudad_salida} y {ciudad_llegada}.')
            else:
                return print(f'Autobuses Arcas no ofrece una ruta directa entre {ciudad_salida} y {ciudad_llegada}.')

#reservar_billete_directo(rutas)
            
               
def mostrar_billete_reservado(billete):
    if billete==None:
        print('No hay reservas.')
    else:
        print(f'La cantidad de billetes reservados es {billete}. La ciudad de salida es {ciudad_salid} y la ciudad de llegada es {ciudad_llegad}.')

mostrar_billete_reservado(billete)














while True:
    print('--------------------------AUTOBUSES ARCAS-------------------------')
    print('1) Mostrar rutas.')
    print('2) Mostrar rutas que salen de una ciudad.')
    print('3) Reservar billete directo entre ciudades.')
    print('4) Mostrar billetes reservados.')
    print('5) Cerrar el aplicativo.')
    print('')
    opcion=int(input('Selecciona una opción: '))
    match opcion:
        case 1:
            mostrar_rutas(rutas)
        case 2:
            mostrar_rutas_ciudad_de_salida(rutas)
        case 3:
            reservar_billete_directo(rutas)
        case 4:
            mostrar_billete_reservado(billete)
        case 5:
            print('Saliendo del programa...')
            break
        



