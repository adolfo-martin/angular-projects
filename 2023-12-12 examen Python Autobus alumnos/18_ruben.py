
# Ruben
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
billetes_reservados = []

while True:
    print("")
    print("----------- AUTOBUSES ARCAS ------------")
    print("1) Mostrar rutas.")
    print("2) Mostrar rutas que salen de una ciudad.")
    print("3) Reservar billete directo entre ciudades.")
    print("4) Mostrar billetes reservados.")
    print("5) Cerrar el aplicativo.")

    print("")
    opcion = int(input("Selecciona una opcion: "))
    print("")

    def mostrar_rutas(rutas):
        print("------------------------- RUTAS -----------------------------")
        print(f"CIUDAD SALIDA CIUDAD LLEGADA HORA SALIDA HORA LLEGADA PRECIO.")
        print("------------   -------------  ----------  ------------ -------")
        for ruta in rutas:
            hora_llegada = devolver_hora_llegada(ruta["duracion"], ruta["hora_salida"], ruta["minuto_salida"])
            print(f"{ruta["ciudad_salida"]:15s} {ruta["ciudad_llegada"]:15s} {ruta["hora_salida"]}:{ruta["minuto_salida"]} {hora_llegada:15s} {ruta["precio"]:8.2f}")

    
    def devolver_hora_llegada(minutos, hora_salida, minuto_salida):
        hora = minutos//60
        mins = minutos%60

        minutos_totales = mins+minuto_salida
        if minutos_totales < 60:
            hora_llegada = str(hora+hora_salida)+str(":")+str((minuto_salida+mins))
        else:
            hora_llegada = str(1+(hora+hora_salida))+str(":")+str((minuto_salida+mins)-60)
        return hora_llegada
    

    def mostrar_rutas_que_salen_de_una_ciudad(rutas):
        ciudad_salida = input("Dime la ciudad de salida: ")
        existe = False
        for ruta in rutas:
            if ruta["ciudad_salida"]==ciudad_salida:
                existe=True


        if existe:
            print("------------------------- RUTAS --------------------------------------")
            print(f"CIUDAD SALIDA   CIUDAD LLEGADA   HORA SALIDA   HORA LLEGADA   PRECIO.")
            print("-------------   --------------   -----------   ------------   -------")
            for ruta in rutas:
                if ruta["ciudad_salida"]==ciudad_salida:
                    print(f"{ruta["ciudad_salida"]:15s} {ruta["ciudad_llegada"]:15s} {ruta["hora_salida"]}:{ruta["minuto_salida"]} {ruta["precio"]:8.2f}")
        else:
            print(f"Autobuses Arcas no ofrece rutas de salida desde {ciudad_salida}.")

    
    def reservar_billetes(rutas):
        ciudad_salida = input("Dime la ciudad de salida: ")
        ciudad_llegada = input("Dime la ciudad de llegada: ")
        billetes = int(input("Dime la cantidad de billetes: "))

        existe = False
        for ruta in rutas:
            if ruta["ciudad_salida"] == ciudad_salida and ruta["ciudad_llegada"] == ciudad_llegada:
                existe = True
                hora_salida = ruta["hora_salida"]
                precio = ruta["precio"]
                duracion = ruta["duracion"]
                minuto_salida = ruta["minuto_salida"]
                break

        if existe:
            print(f"Se han reservado {billetes} billetes entre {ciudad_salida} y {ciudad_llegada}")
            
            reserva = {
                "ciudad_salida": ciudad_salida,
                "ciudad_llegada": ciudad_llegada,
                "hora_salida": hora_salida,
                "minuto_salida": minuto_salida,
                "duracion": duracion,
                "precio": precio,
                "cantidad": billetes,
            }
            billetes_reservados.append(reserva)

        else:
            print(f"Autobuses Arcas no ofrece ruta directa entre {ciudad_salida} y {ciudad_llegada}")


    def mostrar_billetes_reservados():
        print("-------------------------------------- BILLETES RESERVADOS --------------------------------------")
        print(f"CIUDAD SALIDA   CIUDAD LLEGADA   HORA SALIDA   HORA LLEGADA   PRECIO   CANTIDAD")
        print("-------------   --------------   -----------   ------------   -------   --------")

        if len(billetes_reservados) == 0:
            print("No hay reservas")
        else:
            importe_total = 0
            for billete in billetes_reservados:
                hora_llegada = devolver_hora_llegada(billete["duracion"], billete["hora_salida"], billete["minuto_salida"])
                print(f"{billete["ciudad_salida"]:15s} {billete["ciudad_llegada"]:15s} {billete["hora_salida"]}:{billete["minuto_salida"]} {hora_llegada} {billete["precio"]:8.2f} {billete["cantidad"]:8}")
                importe_total = importe_total + billete["precio"] * billete["cantidad"]
            print("")
            print(f"Importe total: {importe_total}")

    match opcion:
        case 1:
            mostrar_rutas(rutas)
        case 2:
            mostrar_rutas_que_salen_de_una_ciudad(rutas)
        case 3:
            reservar_billetes(rutas)
        case 4:
            mostrar_billetes_reservados()
        case 5:
            break






