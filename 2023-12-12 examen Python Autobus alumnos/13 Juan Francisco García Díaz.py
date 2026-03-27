# 13 Juan Francisco García Díaz

import os
os.system("CLS")
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
    print("----------RUTAS----------")
    print(f"{'CIUDAD SALIDA':15s} {'CIUDAD LLEGADA':15s} {'HORA SALIDA':15s} {'HORA LLEGADA':15s} {'PRECIO':25s}")
    print("------------")
    for ruta in rutas:
        ciudad_salida=(f"{ruta['ciudad_salida']:15s}")
        ciudad_llegada=(f"{ruta['ciudad_llegada']:15s}")
        hora_salida_horas=ruta['hora_salida']
        hora_salida_minutos= (f"{ruta['minuto_salida']}")
        precio=(f"{ruta['precio']:15n}")
        print(f"{ciudad_salida}--> {ciudad_llegada} {hora_salida_horas} horas y {hora_salida_minutos} minutos ---> {precio} euros")



def mostrar_ruta_concreta(rutas):
    ciudad= input("Dime una ciudad: ")
    for i in range(0,len(rutas)):
        if ciudad == {rutas[i]['ciudad_salida']}:
            ciudad_destino={rutas[i]['ciudad_llegada']}
            precio_billete={rutas[i]['precio']}
        print(f"La ciudad {ciudad} tiene como destino {ciudad_destino} y el precio del billete es: {precio_billete}")


def reservar_billetes(rutas):
    ciudad_salida=input("Dime la ciudad de la que sales")
    numero_billetes=int(input("Dime el numero de billetes que quieres comprar: "))
    numero_billetes=(rutas[i]['precio'])
    
    for i in range(0,len(rutas)):
        if ciudad_salida==(rutas[i]['ciudad_salida']):
            ciudad_salida=(rutas[[i]['precio']])
        print(f"El precio del billete para la ciudad son: {ciudad_salida} y con los billetes que has comprado el precio es: {ciudad_salida*numero_billetes}")
        


reservar_billetes(rutas)


print("---AUTOBUSES ARCAS---") 
print("1) MOSTRAR RUTAS")
print("2) MOSTRAR RUTAS QUE SAELN DE UNA CIUDAD")
print("3) RESERVAR BILLETE DIRECTO ENTRE CIUDADES")
print("4) MOSTRAR BILLETES RESERVADOS")
print("5) CERRAR APLICACIÓN")

opcion= int(input("Selecciona una opción: "))

if opcion ==1:
    opcion == mostrar_rutas(rutas)
elif opcion ==2: 
    mostrar_ruta_concreta(rutas)








