# 11 Pedro Fortuna

import os, sys
os.system("cls")


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



def mostrar_menu_y_opcion():

    while True:
        print("-------- AUTOBUSES ARCAS --------")
        print("1) Mostrar rutas.")
        print("2) Mostrar rutas que salen de una ciudad.")
        print("3) Reservar billete directo entre ciudades.")
        print("4) Mostrar billetes reservados.")
        print("5) Cerrar el aplicativo.\n")

        opcion = input("Selecciona la opción: ")

        match opcion:
            case "1":
                mostrar_rutas(rutas)
            case "2":
                mostrar_rutas_que_salen_de_una_ciudad(rutas)
            case "3":
                reservar_billete_directo_entre_ciudades(rutas)
            case "4":
                mostrar_billetes_reservados(rutas)
            case "5":
                print("Ha salido del sistema.")
                sys.exit()
            case _i:
                print("Seleccione una opción válida.\n")



def mostrar_rutas(rutas):
    print("---------- RUTAS ----------")
    for ruta in rutas:
        print(f"CIUDAD SALIDA")
        pass

    
        




def mostrar_rutas_que_salen_de_una_ciudad(rutas):

    opcion_ciudad = input("Dime la ciudad de salida: ")

    for ruta in rutas:
        if opcion_ciudad not in ruta['ciudad_salida']:
            print(f"Autobuses Arcas no ofrece rutas con salida desde {opcion_ciudad}.")
            return

        if opcion_ciudad in rutas:
            print(f"{opcion_ciudad:15s} {ruta['ciudad_llegada']}")
            pass








def reservar_billete_directo_entre_ciudades(rutas):
    
    ciudad_de_salida = input("Dime la ciudad de salida del billete: ")
    ciudad_de_llegada = input("Dime la ciudad de llegada del billete: ")
    cantidad_billetes = int(input("Dime la cantidad de billetes: "))

    for ruta in rutas: 
        if {ruta['ciudad_salida'][1]} == ciudad_de_salida:
            if {ruta['ciudad_llegada'][2]} == ciudad_de_llegada:
                print(f"Se han reservado {cantidad_billetes} billetes entre {ciudad_de_salida} y {ciudad_de_llegada}.")
                return
                
        if ciudad_de_salida not in ruta['ciudad_salida'][1] and ciudad_de_llegada not in ruta['ciudad_llegada'][2]:
            print(f"Autobuses Arcas no ofrece ruta directa entre {ciudad_de_salida} y {ciudad_de_llegada}.")
            return
            



def mostrar_billetes_reservados(rutas):
    billetes_reservados = 0

    if billetes_reservados == 0:
        print("\nNo hay reservas.\n")
        pass













mostrar_menu_y_opcion()