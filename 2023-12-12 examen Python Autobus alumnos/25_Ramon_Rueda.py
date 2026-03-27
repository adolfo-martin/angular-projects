#25_Ramon_Rueda

import os,sys
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

def mostrar_rutas(rutas):

    print("------------------------------------------ RUTAS ------------------------------------------")
    print("{:20} {:20} {:15} {:15} {:15}".format("Ciudad Salida", "Ciudad Llegada", "Hora Salida", "Hora Llegada", "Precio"))
    for ruta in rutas:
        print(f"{ruta["ciudad_salida"]:20} {ruta["ciudad_llegada"]:20} {ruta["hora_salida"]:10} {ruta["duracion"]:15} {ruta["precio"]:15}")
        print("")


def mostrar_rutas_que_salen_de_una_ciudad(rutas):
    ciudad = input("Dime una ciudad: ".capitalize())
    print("------------------------------------------ RUTAS ------------------------------------------")
    print("{:20} {:20} {:15} {:15} {:15}".format("Ciudad Salida", "Ciudad Llegada", "Hora Salida", "Hora Llegada", "Precio"))
    for ruta in rutas:
        if ruta["ciudad_salida"] == ciudad:
            print(f"{ruta["ciudad_salida"]:20} {ruta["ciudad_llegada"]:20} {ruta["hora_salida"]:10} {ruta["duracion"]:15} {ruta["precio"]:15}")
            print("")

def reservar_billetes(rutas):
    for ruta in rutas:
        if ruta["ciudad_salida"] == ciudad1:
            if ruta["ciudad_llegada"] == ciudad2:
                print(f"Se han reservado {cantidad} billetes entre {ciudad1} y {ciudad2}")
                print("")
                break
            else:
                print(f"Autobuses Arcas no ofrece una ruta directa entre {ciudad1} y {ciudad2}")

def mostrar_billetes_reservados(cantidad):
    print("---------------- BILLETES RESERVADOS --------------")
    print(f"Se han reservado un total de {cantidad} billetes.")
        

while True:
    print("------------------- AUTOBUSES ARCAS -------------------")
    print("1) Mostrar rutas.")
    print("2) Mostrar rutas que salen de una ciudad.")
    print("3) Reservar billete directo entre ciudades.")
    print("4) Mostrar billetes reservados")
    print("5) Cerrar el aplicativo.")
    print("")

    option = int(input("Selecciona la opción: "))

    match option:
        case 1:
            print(mostrar_rutas(rutas))
        case 2:
            mostrar_rutas_que_salen_de_una_ciudad(rutas)
        case 3:
            ciudad1 = input("Dime la primera ciudad: ".capitalize())
            ciudad2 = input("Dime la segunda ciudad: ".capitalize())
            cantidad = int(input("Dime la cantidad: "))
            reservar_billetes(rutas)
        case 4:
            mostrar_billetes_reservados(cantidad)
        case 5:
            print("Saliendo del programa...")
            sys.exit()