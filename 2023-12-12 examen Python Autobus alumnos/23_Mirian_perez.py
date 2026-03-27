# 23_Mirian_perez
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




def mostrar_menu_y_pedir_opcion():

    print('------------- AUTOBUSES ARCAS ----------------')
    print('1) Mostrar rutas.')
    print('2) Mostrar rutas que salen de una ciudad. ')
    print('3) Reservar billete directo entre ciudades. ')
    print('4) Mostrar billetes reservados. ')
    print('5) Cerrar el aplicativo. ')




    opcion = int(input('Selecciona la opción: '))

    match opcion:
        case '1':
            mostrar_rutas()
        case '2':
            mostrar_rutas_que_salen_de_ciudad()
        case '3':
            reservar_billete_directo()
        case '4':
            mostrar_billetes_reservados()
        case '5':
            salir_aplicativo()


mostrar_menu_y_pedir_opcion()



    
def mostrar_rutas(rutas):
    ciudad_salida = rutas['ciudad_salida']
    ciudad_llegada = rutas['ciudad_llegada']
    hora_salida = rutas['hora_salida']
    hora_llegada = rutas['hora_salida'] + rutas['duracion']
    precio = rutas['precio']

    print('------------------ RUTAS ------------------')
    print(f'{ciudad_salida:15s} {ciudad_llegada:15s} {hora_salida:8.2f} {hora_llegada:8.2f} {precio:8.2f}')




def mostrar_rutas_que_salen_de_ciudad():
    ciudad_seleccionada = input('Dime la ciudad de salida: ')

    for ruta in rutas:
        if ciudad_seleccionada == rutas['ciudad_salida']:
            print(f'{ciudad_seleccionada['ciudad_salida']:15s} {ciudad_seleccionada['ciudad_llegada']:15s} {ciudad_seleccionada['hora_salida']:8.2f} {(ciudad_seleccionada['hora salida'] + ciudad_seleccionada['duracion']):8.2f} {ciudad_seleccionada['precio']:8.2f}')
        else:
            print(f'Autobuses Arcas no ofrece rutas con saida {ciudad_seleccionada}')




def reservar_billete_directo(rutas):
    ciudad_salida = input('Dime la ciudad de salida del billete: ')
    ciudad_llegada = input('Dime la ciudadde llegada del billete: ')
    cantidad_billetes = int(input('Dime la cantidad de billetes: '))

    for i in rutas:
        if ciudad_salida == rutas['ciudad_salida'][i] and ciudad_llegada == ['ciudad_salida'][i]:
            print(f'Se ha reservado {cantidad_billetes} billetes entre {ciudad_salida} y {ciudad_llegada}.')
        else:
            print(f'Autobuses Arcas no ofrece una ruta directa entre {ciudad_salida} y {ciudad_llegada}.')        




def mostrar_billetes_reservados(cantidad_billetes):
    billete_reservado = reservar_billete_directo(rutas)
    importe_total = cantidad_billetes * billete_reservado['precio']

    if not reservar_billete_directo():
        print('No hay reservas. ')
    else:
        print('----------------- BILLETES RESERVADOS -----------------')
        print(f'{billete_reservado['ciudad_salida']:15s} {billete_reservado['ciudad_salida']:15s} {billete_reservado['hora_salida']:8.2f} {(billete_reservado['hora_salida'] + billete_reservado['duracion']):8.2f} {billete_reservado['precio']:8.2f} {billete_reservado[cantidad_billetes]:8n}')
        print(f'IMPORTE TOTAL: {importe_total}')




def salir_aplicativo():
    sys.exit()