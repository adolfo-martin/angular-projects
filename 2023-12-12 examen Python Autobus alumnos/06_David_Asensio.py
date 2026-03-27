# 06_David_Asensio

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

def mostrar_menu():
    
    while True:
        print('------------------------ AUTOBUSES ARCAS ------------------------')
        print('1) Mostrar rutas')
        print('2) Mostrar rutas que salen de una ciudad')
        print('3) Reservar billete directo entre ciudades')
        print('4) Mostrar billetes reservados')
        print('5) Cerrar aplicativo')

        opcion=int(input('Seleciona la opción: '))

        if opcion==1:
            mostrar_rutas(rutas)
        elif opcion==2:
            mostrar_rutas_salen_de_ciudad(rutas)
        elif opcion==3:
            reservar_billete(rutas)
        elif opcion==4:
            mostrar_billetes_reservados(rutas)
        elif opcion==5:
            sys.exit()


def mostrar_rutas(rutas):
    hora_de_llegada=0

    print(f'--------------------------------------------- Rutas---------------------------------------------') 
    print(f'{'Ciudad':15s}{'Ciudad':20s}{'Hora':25s}{'Hora':30s}')
    print(f'{'Salida':15s}{'Llegada':20s}{'Salida':25s}{'Llegada':30s}{'Precio':35s}')
    print(f'{'------':15s}{'------':20s}{'------':25s}{'------':30s}{'------':35s}\n')

    for ruta in rutas:
        hora_de_llegada=(ruta['hora_salida'])+((ruta['minuto_salida']/60)+(ruta['duracion'])/60)
        hora_de_llegada_final=hora_de_llegada
        print(f'{ruta['ciudad_salida']:15s}{ruta['ciudad_llegada']:10s}{ruta['hora_salida']:10.0f}{':'}{ruta['minuto_salida']}{hora_de_llegada_final:26.2f}{ruta['precio']:30.2f}€\n')


def mostrar_rutas_salen_de_ciudad(rutas):
        
    ciudad_introducida=input('Dime la ciudad de salida: ')

    for ruta in rutas:
        if ruta['ciudad_salida'] is not ciudad_introducida:
            print(f'Autobuses Arcas Meca no ofrece rutas con salidas desde {ciudad_introducida}')
            break
    
    print(f'{'Ciudad':15s}{'Ciudad':20s}{'Hora':25s}{'Hora':30s}')
    print(f'{'Salida':15s}{'Llegada':20s}{'Salida':25s}{'Llegada':30s}{'Precio':35s}')
    print(f'{'------':15s}{'------':20s}{'------':25s}{'------':30s}{'------':35s}\n')
    for ruta in rutas:
        if ruta['ciudad_salida']==ciudad_introducida:
            hora_de_llegada=(ruta['hora_salida'])+((ruta['minuto_salida']/60)+(ruta['duracion'])/60)
            hora_de_llegada_final=hora_de_llegada
            print(f'{ruta['ciudad_salida']:15s}{ruta['ciudad_llegada']:10s}{ruta['hora_salida']:10.0f}{':'}{ruta['minuto_salida']}{hora_de_llegada_final:26.2f}{ruta['precio']:30.2f}€')
                
        
def reservar_billete(rutas):
    lista_de_reservas=[]
    reservas={}    
    
    billete_salida=input('Dime la ciudad de salida del billete: ')
    billete_llegada=input('Dime la ciudad de llegada del billete: ')
    cantidad_billete=int(input('Dime la cantidad de billetes: '))
    reservas={'salida':billete_salida, 'llegada':billete_llegada, 'cantidad':cantidad_billete}
    lista_de_reservas.append(reservas)
    return lista_de_reservas
    
        
def mostrar_billetes_reservados(rutas):
    try: 
        reservas_de_billetes=reservar_billete()
        print(f'--------------------------------------------- Billetes reservados ---------------------------------------------') 
        print(f'{'Ciudad':15s}{'Ciudad':20s}{'Hora':25s}{'Hora':30s}')
        print(f'{'Salida':15s}{'Llegada':20s}{'Salida':25s}{'Llegada':30s}{'Precio':35s}')
        print(f'{'------':15s}{'------':20s}{'------':25s}{'------':30s}{'------':35s}\n')
        print(f'{reservas_de_billetes['salida']:15s}{reservas_de_billetes['llegada']:10s}{reservas_de_billetes['hora_salida']:10.0f}{':'}{reservas_de_billetes['minuto_salida']}')
    except Exception as error:
        print(f'\nNo hay reservas\n')


mostrar_menu()