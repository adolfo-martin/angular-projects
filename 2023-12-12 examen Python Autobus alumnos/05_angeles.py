# angeles

import os
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


def mostrar_menu_y_elegir_opcion():
    while True:
        print("----------------- AUTOBUSES ARCAS -----------------")
        print("1) Mostrar rutas.") 
        print("2) Mostrar rutas que salen de una ciudad.")
        print("3) Reservar billete directo entre ciudades.")
        print("4) Mostrar billetes reservados.")
        print("5) Cerrar el aplicativo.")

        opcion = input("\nSeleeciona la opción: ")

        match opcion:
            case "1":
                ...
            case "2":
                ...
            case "3":
                ...
            case "4":
                ...
            case "5":
                ...
            case _:
                print("ERROR, prueba con otra opción (1-5): ")

def mostrar_rutas():
    print("---------------------------------- RUTAS ---------------------------------")
    print ("CIUDAD          CIUDAD          HORA        HORA")
    print("LLEGADA          SALIDA          SALIDA      LLEGADA        PRECIO" )
    print("---------------- --------------- ---------- --------------- -------")
   
    for ruta in rutas:
        print(ruta["ciudad_salida"])
        print(ruta["ciuadad_llegada"])
        print(ruta["hora_salida"])
        print(ruta["precio"])
    
    print(f"{ruta["ciudad_salida"]:8.2f}  {ruta["ciuadad_llegada"]:8.2f}  {ruta["hora_salida"]:8.2f }: {ruta["minuto_salida"]}  {ruta["duracion"]:8.2f}  {ruta["precio"]:8.2f}")



def pasar_minutos_a_horas():

    duracion = []
    for ruta in rutas:
        horas = 0
        minutos = 0
        minutos = horas / 60
        
        if ruta["duracion"]>=60:
            horas += 1
            minutos += 1
            duracion.append(horas, minutos)
            rutas.append(duracion)
            
    return duracion



def mostrar_rutas_que_sale_de_una_ciudad():
    print("---------------------------------- RUTAS ---------------------------------")

    ciudad_salida_introducida = input("Dime la ciudad de salida: ")
    print ("CIUDAD          CIUDAD          HORA        HORA")
    print("LLEGADA          SALIDA          SALIDA      LLEGADA        PRECIO" )
    print("---------------- --------------- ---------- --------------- -------")


    for ruta in rutas():
        
        if ruta["ciudad_salida"] == ciudad_salida_introducida:
            print({ruta["ciudad_salida"]})
            print({ruta["ciudad_llegada"]})
            print({ruta["hora_salida"]})
            print({ruta["hora_llegada"]})
        
        else:
            print(f"Autobuses Arcas no ofrece rutas con salida desde {ciudad_salida_introducida}")



def reservar_billete():
    
    reserva_billetes = []

    ciudad_salida_billete = input("Dime la ciudad de salida del billete: ")
    ciudad_llegada_billete = input("Dime la ciudad de llegada del billete: ")
    cantidad_de_billetes = input("Dime la cantidad de billetes: ")

    for ruta in rutas:
        if ciudad_salida_billete == ruta["ciudad_salida"] and ciudad_salida_billete == ruta["ciudad_llegada"]:
            print(f"Se han reservado {cantidad_de_billetes} entre {ciudad_salida_billete} y {ciudad_llegada_billete}.")
            reserva_billetes.append(ciudad_salida_billete)
            reserva_billetes.append(ciudad_llegada_billete)
            reserva_billetes.append(cantidad_de_billetes)

        else: 
            print(f"Autobuses Arcas no ofrece una ruta directa entre {ciudad_salida_billete} y {ciudad_llegada_billete}")

    return



def mostrar_billetes_reservados():

    for ruta in rutas:
        reservas = reservar_billete()
        
        if reservas is True:
            print("-------------BILLETS RESERVADOS--------------")
            print("CIUDAD          CIUDAD           HORA        HORA")
            print("SALIDA          LLEGADA          SALIDA      LLEGADA     PRECIO      CANTIDAD")
            print("--------------- ---------------- ----------- ----------- ----------- ---------")

            precio_total = ruta["precio"] * reservas


            print(precio_total)
        else:
            print("No hy reservas")

        

    return



print(mostrar_menu_y_elegir_opcion())