# 17 Sergio Lopez
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


billetes_reservados = []


def mostrar_rutas(rutas):
    print('-------------------------------Rutas-------------------')
    print(f"{'CIUDAD':15s}{'CIUDAD':15s}{'HORA':15s}")
    print(f"{'SALIDA':15s}{'LLEGADA':15s}{'SALIDA':15s}{'PRECIO':15s}")
    print(f"{'------':15s}{'------':15s}{'------':15s}{'------':15s}")
    for ruta in rutas: 
        print(f"{ruta['ciudad_salida']:15s}{ruta['ciudad_llegada']:15s}{ruta['hora_salida']:8.2F}{ruta['minuto_salida']}{ruta['precio']:8.2f}")
      

def mostrar_rutas_que_salen_de_una_ciudad(rutas):

    opcion_2 = input('Dime la ciudad de salida: ')
    print('-------------------------------Rutas-------------------')
    print(f"{'CIUDAD':15s}{'CIUDAD':15s}{'HORA':15s}")
    print(f"{'SALIDA':15s}{'LLEGADA':15s}{'SALIDA':15s}{'PRECIO':15s}")
    print(f"{'------':15s}{'------':15s}{'------':15s}{'------':15s}")
    for ruta in rutas:
        if ruta['ciudad_salida'] == opcion_2:
            print(f"{ruta['ciudad_salida']:15s}{ruta['ciudad_llegada']:15s}{ruta['hora_salida']:8.2F}{ruta['precio']:8.2F}")
        
        if ruta['ciudad_salida'] != opcion_2:
            print(f'Autobusas Arcas no ofrece rutas con salida desde {opcion_2}')
    
    
def reservar_billetes(rutas):
   ciudad_salidad = input('Dime la ciudad de salida del billete: ')
   ciudad_llegada = input('Dime la ciudad de llegada del billete: ')
   cantidad = int(input('Dime la cantidad de billetes: '))

   for ruta in rutas:
       if ruta['ciudad_salida'] == ciudad_salidad and ruta['ciudad_llegada'] == ciudad_llegada:
           reservados = {
               'ruta_salida': ciudad_salidad,
               'ruta_llegada': ciudad_llegada,
               'cantidad_billetes': cantidad
           }
           billetes_reservados.append(reservados)
           print(f'Se han reservado {cantidad} billetes entre {ciudad_salidad} y {ciudad_llegada}.')
           break
       if ruta['ciudad_salida'] != ciudad_salidad and ruta['ciudad_llegada'] != ciudad_llegada: 
           print(f'Autobusas Arcas no ofrece una ruta directa entre {ciudad_salidad} y {ciudad_llegada}.')
           break  


def mostra_billetes_reservados(rutas):
    
    print('----------------------------BILLETES RESERVADOS-------------------')
    print(f"{'CIUDAD':15s}{'CIUDAD':15s}{'HORA':15s}")
    print(f"{'SALIDA':15s}{'LLEGADA':15s}{'SALIDA':15s}{'PRECIO':15s}")
    print(f"{'------':15s}{'------':15s}{'------':15s}{'------':15s}")
    for ruta in rutas:
        for billete in billetes_reservados:
            if billete[ruta_salida] == ruta['ciudad_salida'] and billete[ruta_llegada] == ruta['ciudad_llegada']:
                print(F"{billete[ruta_salida]:15s}{billete[ruta_llegada]:15s} {ruta['hora_salida']:8.2F} {ruta['precio']:8.2F}")
    







numero = False
while numero == False:
    print('-------------------------AUTOBUSES ARCAS-------------------------')
    print('1) Mostrar rutas.')
    print('2) Mostrar rutas que salen de la ciudad.')
    print('3) Reservar billete directo entre ciudades.')
    print('4) Mostrar billetes reservados.')
    print('5) Cerrar la aplicación')

    opcion = int(input('Introduce una opciòn: '))

    match opcion:
        case 1:
            mostrar_rutas(rutas)
        case 2:
            mostrar_rutas_que_salen_de_una_ciudad(rutas)
        case 3:
            reservar_billetes(rutas)
        case 4:
            mostra_billetes_reservados(rutas)
        case 5:
            sys.exit()