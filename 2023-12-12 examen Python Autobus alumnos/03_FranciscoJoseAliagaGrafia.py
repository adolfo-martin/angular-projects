# Francisco José Aliaga
import os
import sys
os.system("cls")

RUTAS = [
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
BILLETES_RESERVADOS = []


def mostrar_menu():

    while True:
        print("---------------------------- AUTOBUSES ARCAS ----------------------------")
        print("1) Mostrar rutas.")
        print("2) Mostrar rutas que salen de una ciudad.")
        print("3) Reservar billete directo entre ciudades.")
        print("4) Mostrar billetes reservados.")
        print("5) Cerrar el aplicativo")

        print("-------------------------------------------------------------------------")

        opcion = int(input("Selecciona la opción: "))

        match opcion:
            case 1:
                mostrar_rutas()
            case 2:
                ciudad = input("Dime la ciudad de salida: ")
                try:
                    mostrar_rutas_salientes_de_una_ciudad(ciudad)
                except Exception as error:
                    print(error)
            case 3:
                try:
                    print(reservar_billete_directo())
                except Exception as error:
                    print(error)
            case 4:
                mostrar_billetes_reservados()
            case 5:
                sys.exit()
            case _:
                raise Exception("Opción incorrecta.")


def calcular_hora_llegada(ruta):
    horas_y_minutos_llegada = []

    hora_llegada = ruta["hora_salida"] + (ruta["duracion"]//60)

    minuto_llegada = ((((ruta["duracion"]//60) * 60) - ruta["duracion"]) * -1) + ruta["minuto_salida"]

    if minuto_llegada > 59:
        hora_llegada += 1
        minuto_llegada -= 60

    horas_y_minutos_llegada.append(hora_llegada)
    horas_y_minutos_llegada.append(minuto_llegada)

    return horas_y_minutos_llegada


def mostrar_rutas():
    print("---------------------------- RUTAS ----------------------------")
    print(f"{"CIUDAD SALIDA":15s} {"CIUDAD LLEGADA":15s} {"HORA SALIDA":15s} {"HORA LLEGADA":15s} {"PRECIO":15s}")
    print(f"{"--------------":15s} {"--------------":15s} {"------------":15s} {"------------":15s} {"------------":15s}")

    for ruta in RUTAS:
        hora_llegada = calcular_hora_llegada(ruta)
        print(f"{ruta["ciudad_salida"]:15s} {ruta["ciudad_llegada"]:15s} {ruta["hora_salida"]:2.0f}:{ruta["minuto_salida"]} {hora_llegada[0]:13.0f}:{hora_llegada[1]:.0f} {ruta["precio"]:15.2f}")
    
    print("")
    return None


def mostrar_rutas_salientes_de_una_ciudad(ciudad):
    contador = 0
    for ruta in RUTAS:
        if ruta["ciudad_salida"] == ciudad:
            contador += 1
    if contador == 0:
        raise Exception(f"Autobuses arcas no ofrece rutas con salida desde {ciudad}")

    print("---------------------------- RUTAS ----------------------------")
    print(f"{"CIUDAD SALIDA":15s} {"CIUDAD LLEGADA":15s} {"HORA SALIDA":15s} {"HORA LLEGADA":15s} {"PRECIO":15s}")
    print(f"{"--------------":15s} {"--------------":15s} {"------------":15s} {"------------":15s} {"------------":15s}") 
    for ruta in RUTAS:
        if ruta["ciudad_salida"] == ciudad:
            hora_llegada = calcular_hora_llegada(ruta)
            print(f"{ruta["ciudad_salida"]:15s} {ruta["ciudad_llegada"]:15s} {ruta["hora_salida"]:2.0f}:{ruta["minuto_salida"]} {hora_llegada[0]:13.0f}:{hora_llegada[1]:.0f} {ruta["precio"]:15.2f}")

    print("")
    

def reservar_billete_directo():
    ciudad_salida = input("Dime la ciudad de salida del billete: ")
    
    ciudad_llegada = input("Dime la ciudad de llegada del billete: ")
    
    cantidad_billetes = int(input("Dime la cantidad de billetes: "))
    
    for ruta in RUTAS:
        if ciudad_salida == ruta["ciudad_salida"] and ciudad_llegada == ruta["ciudad_llegada"]:
            BILLETES_RESERVADOS.append({"id_ruta":ruta["id"],"cantidad_billetes":cantidad_billetes})
            return f"Se han reservado {cantidad_billetes} billetes entre {ciudad_llegada} y {ciudad_salida}."
        
    raise Exception(f"Autobuses Arcas no ofrece una ruta directa entre {ciudad_llegada} y {ciudad_salida}.")


def mostrar_billetes_reservados():
    if len(BILLETES_RESERVADOS) != 0:
        precios = 0
        
        print(f"{"CIUDAD SALIDA":15s} {"CIUDAD LLEGADA":15s} {"HORA SALIDA":15s} {"HORA LLEGADA":15s} {"PRECIO":15s} {"CANTIDAD":15s}")
        print(f"{"--------------":15s} {"--------------":15s} {"------------":15s} {"------------":15s} {"------------":15s} {"------------":15s}")
        
        for billete in BILLETES_RESERVADOS:
            
            for ruta in RUTAS:
                if ruta["id"] == billete["id_ruta"]:
                    hora_llegada = calcular_hora_llegada(ruta)
                    precio = ruta["precio"] * billete["cantidad_billetes"]
                    precios += precio
                    print(f"{ruta["ciudad_salida"]:15s} {ruta["ciudad_llegada"]:15s} {ruta["hora_salida"]:2.0f}:{ruta["minuto_salida"]} {hora_llegada[0]:13.0f}:{hora_llegada[1]:.0f} {ruta["precio"]:15.2f} {billete["cantidad_billetes"]:13.0f}")
        
        print(f"IMPORTE TOTAL: {precios}")
    
    else:
        print("No hay reservas")
    
    return None

        
mostrar_menu()