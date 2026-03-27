# 28_sebastian_stancu

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


import os
import sys
os.system("cls")


def mostrar_menu(rutas):
    print("------------------AUTOBUSES ARCAS------------------")
    print("1) Mostrar rutas.")
    print("2) Mostrar rutas que salen de una ciudad.")
    print("3) Reservar billete directo entre ciudades.")
    print("4) Mostrar billetes reservados.")
    print("5) Cerrar el aplicativo.") 
    print("")
    opcion = input("Seleciona la opcion: ")
        
    if opcion == 1:
        print(mostrar_rutas(rutas))
    elif opcion == 2:
        print(mostrar_rutas_salidas(rutas))
    elif opcion == 3:
        print(reservar_billete_directo(rutas))
    elif opcion == 4:
        print(mostrar_reservas(rutas))
    elif opcion == 5:
        sys.exit()
    
def mostrar_rutas(rutas):
    print("--------------------------- RUTAS ---------------------------")
    print(f"{"CIUDAD":15s} {"CIUDAD":15s} {"HORA":15s} {"HORA":15s}")
    print(f"{"SALIDA":15s} {"LLEGADA":15s} {"SALIDA":15s} {"LLEGADA":15s} {"PRECIO":15s}")
    print("--------------- --------------- --------------- -------------   ------------")
    for ruta in rutas:
        print(f"{ruta["ciudad_salida"]:15s} {ruta["ciudad_llegada"]:15s} {(str(ruta[("hora_salida")])+":"+str(ruta["minuto_salida"])):15s} {calcular_llegada(rutas):15s} {ruta["precio"]:8.2f}")

def mostrar_rutas_salidas(rutas):
    ciudad = input("Dime la ciudad de salida: ")
    if ruta["ciudad_salida"] == ciudad:
        print("--------------------------- RUTAS ---------------------------")
        print(f"{"CIUDAD":15s} {"CIUDAD":15s} {"HORA":15s} {"HORA":15s}")
        print(f"{"SALIDA":15s} {"LLEGADA":15s} {"SALIDA":15s} {"LLEGADA":15s} {"PRECIO":15s}")
        print("--------------- --------------- --------------- -------------   ------------")
        for ruta in rutas:
            if ruta["ciudad_salida"] == ciudad:
                print(f"{ruta["ciudad_salida"]:15s} {ruta["ciudad_llegada"]:15s} {(str(ruta[("hora_salida")])+":"+str(ruta["minuto_salida"])):15s} {calcular_llegada(rutas):15s} {ruta["precio"]:8.2f}")
    else:
        print(f"Autobuses Arcas no ofrece rutas con salida desde {ciudad}")

reserva = False
def reservar_billete_directo(rutas):
    ciudad_salida = input("Dime la cuidad de salida del billete: ")
    ciudad_llegada = input("Dime la ciudad de llegada del billete: ")
    cantidad_billetes = input("Dime la cantida de billetes: ")
    if rutas["ciudad_salida"] == ciudad_salida:
        print(f"Se han reservado {cantidad_billetes} billetes entre {ciudad_salida} y {ciudad_llegada}")
        print("------------------AUTOBUSES ARCAS------------------")
        reservacion = {"ciudad_salida" : ciudad_salida, "ciudad_llegada" : ciudad_llegada, "hora_salida" : str(rutas[("hora_salida")])+":"+str(rutas["minuto_salida"]), "hora_llegada" : calcular_llegada(rutas), "precio" : rutas["precio"], "cantidad" : cantidad_billetes}
        reservas.append(reservacion)
        reserva = True
    else:
        print(f"Autobuses Arcas no ofrece una ruta directa entre {ciudad_salida} y {ciudad_llegada}")
        print("------------------------ AUTOBUSES ARCAS ------------------------")

def mostrar_reservas(rutas, reservas):
    if reserva == False:
        print("No hay reservas")
    else:
        print("--------------------------- BILLETES RESERVADOS ---------------------------")
        print(f"{"CIUDAD":15s} {"CIUDAD":15s} {"HORA":15s} {"HORA":15s}")
        print(f"{"SALIDA":15s} {"LLEGADA":15s} {"SALIDA":15s} {"LLEGADA":15s} {"PRECIO":15s}")
        print("--------------- --------------- --------------- -------------   ------------")
        print(f"{reservas["ciudad_salida"]:15s} {reservas["ciudad_llegada"]:15s} {(str(reservas[("hora_salida")])+":"+str(reservas["minuto_salida"])):15s} {calcular_llegada(reservas):15s} {reservas["precio"]:8.2f}")
        print()
        
            

def calcular_llegada(rutas):
    minutos_brutos = rutas["hora_salida"] * 60
    minutos_brutos + rutas["minuto_salida"]

reservas = []


print(mostrar_menu(rutas))