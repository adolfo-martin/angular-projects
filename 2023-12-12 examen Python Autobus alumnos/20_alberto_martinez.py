# 20_alberto_martinez

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

reservados = 0

def mostrar_menu_y_pedir_opcion():
    bandera = True
    while bandera == True:
        print('-----------------------AUTOBUSES ARCAS-----------------------')
        print('1. Mostrar rutas.')
        print('2. Mostrar rutas que salen de una ciudad.')
        print('3. Reservar billete directo entre ciudades.')
        print('4. Mostrar billetes reservados.')
        print('5.Cerrar el aplicativo.')
        print('')
        
        opcion = int(input('Selecciona la opción: '))

        match opcion:
            case 1: 
                mostrar_encabezado()
                mostrar_rutas(rutas)
            case 2:
                
                mostrar_rutas_una_ciudad(rutas)
                
                
            case 3:
                reservar_billete_directo(rutas)
                
            case 4:
                mostrar_billetes_reservados(rutas,reservados)
                ...

            case 5:
                print('Ha cerrado el aplicativo')
                bandera = False
            case _:
                print('Introduce una opción válida')


def mostrar_encabezado():
    print('--------------------------RUTAS---------------------------'),
    print(f'{'CIUDAD':15s}'f'{'CIUDAD':15s}'f'{'HORA':15s}'f'{'HORA':15s}')
    print(f'{'SALIDA':15s}'f'{'LLEGADA':15s}'f'{'SALIDA':15s}'f'{'LLEGADA':15s}'f'{'PRECIO':15s}')
    print('----------------------------------------------------------')
    
def mostrar_rutas(rutas):
    for ruta in rutas:
        print(f'{ruta['ciudad_salida']:15s}'f'{ruta['ciudad_llegada']}'f'{ruta['hora_salida']:8.2f}'f'{ruta['minuto_salida']:8.2f}'f'{ruta['duracion']:8.2f}'f'{ruta['precio']:8.2f}')


        
       


def mostrar_rutas_una_ciudad(rutas):
    ciudad = input('Dime la ciudad de salida:')
    print('--------------------------RUTAS---------------------------'),
    print(f'{'CIUDAD':15s}'f'{'CIUDAD':15s}'f'{'HORA':15s}'f'{'HORA':15s}')
    print(f'{'SALIDA':15s}'f'{'LLEGADA':15s}'f'{'SALIDA':15s}'f'{'LLEGADA':15s}'f'{'PRECIO':15s}')
    print('----------------------------------------------------------')
    
    for i in range (0,len(rutas)):
        if ciudad == rutas[i]['ciudad_salida']:
            print(f'{rutas[i]['ciudad_salida']:15s}'f'{rutas[i]['ciudad_llegada']}'f'{rutas[i]['hora_salida']:8.2f}'f'{rutas[i]['minuto_salida']:8.2f}'f'{rutas[i]['duracion']:8.2f}'f'{rutas[i]['precio']:8.2f}')

            
        # elif ciudad not in rutas:
        #     print(f'Autobuses Arcas no ofrece rutas con salida desde {ciudad}')
        

def reservar_billete_directo(rutas):
    salida = input('Dime la ciudad de salida del billete: ')
    llegada = input('Dime la ciudad de llegada del billete: ')
    numero_billetes = int(input('Dime la cantidad de billetes: '))
    reservados = 0


    for i in range (0,len(rutas)):
        if salida == rutas [i]['ciudad_salida']:
            for j in range (0,len(rutas[i])):
                if llegada == rutas [i]['ciudad_llegada']:
                    print(f'Se han reservado {numero_billetes} billetes entre {salida} y {llegada}')
                    reservados += numero_billetes
                    break
    if reservados == 0:
        print(f'Autobuses Arcas no ofrece na ruta directa entre {salida} y {llegada}')     
    return reservados
       

                     
def mostrar_billetes_reservados(rutas,reservados):
    if reservados >1:
        for i in range (0,len(rutas)):
            print(f'{rutas[i]['ciudad_salida']:15s}'f'{rutas[i]['ciudad_llegada']}'f'{rutas[i]['hora_salida']:8.2f}'f'{rutas[i]['minuto_salida']:8.2f}'f'{rutas[i]['duracion']:8.2f}'f'{rutas[i]['precio']:8.2f}')

    
    
    
                
                


               

        
mostrar_menu_y_pedir_opcion()

