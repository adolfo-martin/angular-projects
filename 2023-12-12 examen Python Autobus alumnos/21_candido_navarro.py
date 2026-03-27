# 21_candido_navarro

import os,sys
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

billetes_reservados = []
ciudades_salida = []
def calcular_hora_de_llegada(hora_salida,minuto_salida,duracion):
    hora = hora_salida + (duracion//60)
    minutos = minuto_salida + (duracion%60)
    if minutos >= 60:
        hora = hora + (minutos//60)
        minutos = minutos%60

    hora_de_llegada = (str(hora)+':'+str(minutos))
    return hora_de_llegada

def mostrar_rutas():
    
    print('-----------------------------------------------------------')
    for ruta in rutas:
        print(f'{ruta['ciudad_salida']:15s}{ruta['ciudad_llegada']:15s}{ruta['hora_salida']}:{ruta['minuto_salida']}         {calcular_hora_de_llegada(ruta['hora_salida'], ruta['minuto_salida'], ruta['duracion']):15s}{ruta['precio']:8.2f}')

def mostrar_rutas_que_salen():
    ciudad = input('Dime la ciudad de Salida: ')
    lista_ciudades_salida = []
    print('-----------------------------------------------------------')
    for ruta in rutas:
        if ruta['ciudad_salida'] == ciudad:
            formato_ciudad = print(f'{ruta['ciudad_salida']:15s}{ruta['ciudad_llegada']:15s}{ruta['hora_salida']}:{ruta['minuto_salida']}         {calcular_hora_de_llegada(ruta['hora_salida'], ruta['minuto_salida'], ruta['duracion']):15s}{ruta['precio']:8.2f}')
            lista_ciudades_salida.append(formato_ciudad)
        
            
    return lista_ciudades_salida
            


    

def reservar_billete_directo():
    billete_salida = input('Dime la ciudad de salida del billete: ')
    billete_llegada = input('Dime la ciudad de llegada del billete: ')
    cantidad = int(input('Dime la cantidad de billetes: '))
    
    for ruta in rutas:
        if ruta['ciudad_salida'] == billete_salida and ruta['ciudad_llegada'] == billete_llegada:
            for i in range(0, cantidad):
                formato_ciudad = print(f'{ruta['ciudad_salida']:15s}{ruta['ciudad_llegada']:15s}{ruta['hora_salida']}:{ruta['minuto_salida']}         {calcular_hora_de_llegada(ruta['hora_salida'], ruta['minuto_salida'], ruta['duracion']):15s}{ruta['precio']:8.2f}')
                billetes_reservados.append(formato_ciudad)
            print(f'Se han reservado {cantidad} billetes con orígen {billete_salida} y destino {billete_llegada}')
    return billetes_reservados
        
    

def mostrar_billetes_reservados():
    
    return billetes_reservados
    





def mostrar_menu():
    while True:
        
        print('------------------------AUTOBUSES ARCAS--------------------')
        print(' 1)Mostrar rutas.\n 2)Mostrar rutas que salen de una ciudad.\n 3)Reservar billete directo entre ciudades.\n 4)Mostrar billetes reservados.\n 5)Cerrar el aplicativo.\n')
        print('-----------------------------------------------------------')
        opcion = int(input('Selecciona la opción: '))
        print('-----------------------------------------------------------')

        match opcion:
            case 1:
                mostrar_rutas()
            case 2:
                mostrar_rutas_que_salen()
            case 3:
                reservar_billete_directo()
            case 4:
                print(mostrar_billetes_reservados())
            case 5:
                sys.exit() 



mostrar_menu()