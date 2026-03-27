# 01 Hugo Acosta

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
billetes_reservados = [{'id': None, 'cantidad': None}]

def ejecutar_programa(rutas, billetes_reservados):
    while True:    
        if ejecutar_opcion(rutas, billetes_reservados) == True:
            sys.exit()
         
        
def mostrar_menu_y_recoger_opcion():
    print('\n---------------- AUTOBUSES ARCAS ----------------')
    print('1) Mostrar rutas.')
    print('2) Mostrar rutas que salen de una ciudad.')
    print('3) Reservar billete directo entre ciudades.')
    print('4) Mostrar billetes reservados.')
    print('5) Cerrar el aplicativo.')

    opcion = input('\nSeleccione la opción: ')

    return opcion


def ejecutar_opcion(rutas, billetes_reservados):
    bandera = False
    opcion = mostrar_menu_y_recoger_opcion()

    match opcion:
        case '1':
            mostrar_rutas(rutas)
        case '2':
            motrar_rutas_que_salen_de_una_ciudad(rutas)
        case '3':
            reservar_billete_directo_entre_ciudades(rutas, billetes_reservados)
        case '4':
            mostrar_billetes_reservados(rutas, billetes_reservados)
        case '5':
            print('Saliendo...')
            bandera = True
        case _:
            print('Opción no válida.')
        
    return bandera

def mostrar_rutas(rutas):
    print('-------------------- RUTAS --------------------')
    print(f'{'CIUDAD':15s}' f'{'CIUDAD':15s}' f'{'HORA':8s}' f'{'HORA':8s}')
    print(f'{'SALIDA':15s}' f'{'LLEGADA':15s}' f'{'SALIDA':8s}' f'{'LLEGADA':8s}' f'{'PRECIO':8s}')
    print('-------------- -------------- ------- ------- -------')
    for ruta in rutas:
        hora_llegada = ruta['hora_salida'] + (ruta['duracion']//60)
        minuto_llegada = ruta['minuto_salida'] + (ruta['duracion'] - 60*hora_llegada)

        hora_minuto_salida = f'{ruta['hora_salida']}:{ruta['minuto_salida']}'
        hora_minuto_llegada = f'{hora_llegada}:{minuto_llegada}'

        precio = str(ruta['precio'])

        print(f'{ruta['ciudad_salida']:15s}' f'{ruta['ciudad_llegada']:15s}' f'{hora_minuto_salida:8s}' f'{hora_minuto_llegada:8s}' f'{precio:8s}')


def motrar_rutas_que_salen_de_una_ciudad(rutas):
    ciudad_elegida = input('\nIntroduzca la ciudad de salida: ')
    bandera_ciudad_existente = False

    for ruta in rutas:
        if ruta['ciudad_salida'] == ciudad_elegida:
            bandera_ciudad_existente = True

            hora_llegada = ruta['hora_salida'] + (ruta['duracion']//60)
            minuto_llegada = ruta['minuto_salida'] + (ruta['duracion'] - 60*hora_llegada)

            hora_minuto_salida = f'{ruta['hora_salida']}:{ruta['minuto_salida']}'
            hora_minuto_llegada = f'{hora_llegada}:{minuto_llegada}'

            precio = str(ruta['precio'])

            print('\n-------------------- RUTAS --------------------')
            print(f'{'CIUDAD':15s}' f'{'CIUDAD':15s}' f'{'HORA':8s}' f'{'HORA':8s}')
            print(f'{'SALIDA':15s}' f'{'LLEGADA':15s}' f'{'SALIDA':8s}' f'{'LLEGADA':8s}' f'{'PRECIO':8s}')
            print('-------------- -------------- ------- ------- -------')
            print(f'{ruta['ciudad_salida']:15s}' f'{ruta['ciudad_llegada']:15s}' f'{hora_minuto_salida:8s}' f'{hora_minuto_llegada:8s}' f'{precio:8s}')

    if bandera_ciudad_existente == False:
        print(f'Autobuses Arcas no ofrece rutas con salida desde {ciudad_elegida}')
    

def reservar_billete_directo_entre_ciudades(rutas, billetes_reservados):
    ciudad_salida = input('Introduzca la ciudad de salida del billete: ')
    ciudad_llegada = input('Introduzca la ciudad de llegada del billete: ')
    cantidad = int(input('Introduzca la cantidad de billetes que quiere reservar: '))
    posicion_ruta = -1

    for i in range(0,len(rutas)):
        if ciudad_salida == rutas[i]['ciudad_salida'] and ciudad_llegada == rutas[i]['ciudad_llegada']:
            posicion_ruta = i
            if billetes_reservados[0]['id'] == None:
                billetes_reservados[0]['id'] = rutas[i]['id']
                billetes_reservados[0]['cantidad'] = cantidad
            else:    
                billete_nuevo = {'id': rutas[i]['id'], 'cantidad': cantidad}
                billetes_reservados.append(billete_nuevo)
    
    if posicion_ruta == -1:
        print(f'Autobuses Arcas no ofrece una ruta directa entre {ciudad_salida} y {ciudad_llegada}')
    else:
        print(f'Se han reservado {cantidad} billetes entre {ciudad_salida} y {ciudad_llegada}')
    
    return billetes_reservados


def mostrar_billetes_reservados(rutas, billetes_reservados):
    importe_total = 0
    print('-------------------- BILLETES RESERVADOS --------------------')
    print(f'{'CIUDAD':15s}' f'{'CIUDAD':15s}' f'{'HORA':8s}' f'{'HORA':8s}')
    print(f'{'SALIDA':15s}' f'{'LLEGADA':15s}' f'{'SALIDA':8s}' f'{'LLEGADA':8s}' f'{'PRECIO':8s}' f'{'CANTIDAD':8s}')
    print('-------------- -------------- ------- ------- ------- -------')
    for billete in billetes_reservados:
        for ruta in rutas:
            if billete['id'] == ruta['id']:
                importe_total += ruta['precio']*billete['cantidad']

                hora_llegada = ruta['hora_salida'] + (ruta['duracion']//60)
                minuto_llegada = ruta['minuto_salida'] + (ruta['duracion'] - 60*hora_llegada)

                hora_minuto_salida = f'{ruta['hora_salida']}:{ruta['minuto_salida']}'
                hora_minuto_llegada = f'{hora_llegada}:{minuto_llegada}'

                precio = str(ruta['precio'])

                print(f'{ruta['ciudad_salida']:15s}' f'{ruta['ciudad_llegada']:15s}' f'{hora_minuto_salida:8s}' f'{hora_minuto_llegada:8s}' f'{precio:8s}' f'{str(billete['cantidad']):8s}')

    print(f'\nIMPORTE TOTAL: {importe_total}')



ejecutar_programa(rutas, billetes_reservados)

