# 24 Jose Ramon Romera Hernandez

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

def menu():
    print('')
    print('--------------------------AUTOBUSES ARCAS--------------------------')
    print('1) Mostrar rutas.')
    print('2) Mostrar rutas que salen de una ciudad.')
    print('3) Reservar billete directo entre ciudades.')
    print('4) Mostrar billetes reservados')
    print('5) Cerrar el aplicativo.')
    print('')

def mostrar_rutas(rutas):
    print('')
    print('--------------------------------------RUTAS--------------------------------------')
    print('CIUDAD\t\t CIUDAD\t\t\tHORA\t  HORA' )
    print('SALIDA\t\t LLEGADA\t\tSALIDA\t  LLEGADA\tPRECIO')
    print('---------------- --------------------  ---------- ---------- ----------')

    for ruta in rutas:
        print(f'{ruta['ciudad_salida']:15}  {ruta['ciudad_llegada']:15}  {ruta['hora_salida']:8}:{ruta['minuto_salida']}  {ruta['duracion']:8}  {ruta['precio']:12}€ ')

def mostrar_rutas_salen_ciudad(rutas):
    ruta_saliente = []

    ciudad_salida = input('Escribe el nombre de la ciudad de salida: ')
    print('')
    for ciudad in rutas:
        if ciudad['ciudad_salida'] == ciudad_salida:
            ruta_saliente.append(ciudad)
        else:
            print(f'Autobuses Arcas no ofrece rutas con salida desde {ciudad_salida}\n')
            break

    print('Las rutas que salen de esa ciudad son:')
    mostrar_rutas(ruta_saliente)

def reservar_billetes(rutas):
    billete_salida = input('Dime la ciudad de salida del billete: ')
    billete_llegada = input('Dime la ciudad de llegada del billete: ')
    cantidad_billetes = int(input('Dime la cantidad de billetes: '))
    cantidad = 0


    for ruta in rutas:
        if billete_salida == ruta['ciudad_salida'] and billete_llegada == ruta['ciudad_llegada']:
            print(f'Se han revervado {cantidad_billetes} billetes entre {billete_salida} y {billete_llegada}')
            cantidad += cantidad_billetes
            break


    # for ruta in rutas:
    #     if billete_salida == ruta['ciudad_salida'] and billete_llegada == ruta['ciudad_llegada']:   
    #         hay_billete == True

    # if hay_billete == True:
    #     print(f'Se han revervado {cantidad_billetes} billetes entre {billete_salida} y {billete_llegada}')
    # if hay_billete == False:
    #     print('NO HAY BILLETES')


def cerrar_aplicacion():
    print('Saliendo del aplicativo...')

while True:
    menu()
    print('')
    opcionMenu = input('Selecciona la opción: ')
    print('')
    match opcionMenu:
        case '1':
            print('Las rutas son:')
            mostrar_rutas(rutas)
        case '2':
            mostrar_rutas_salen_ciudad(rutas)
        case '3':
            reservar_billetes(rutas)
        case '4':
            ...
        case '5':
            cerrar_aplicacion()
            break
        case default:
            print('Introduce un número entre 1 y 5')
        