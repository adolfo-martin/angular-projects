# 29_Marta_tengo

import os, sys
os.system("cls")


rutas = [
    {"Madrid", "Murcia", "Santander", "Madrid", "Lorca", "Barcelona", "Totana", "Murcia", "Alhama", "Barcelona", "Vigo"},
    {"Murcia", "Lorca", "Vigo", "Barcelona", "Totana", "Santander", "Alhama", "Barcelona", "Murcia", "Vigo", "Madrid"},
    {"8:15", "7:45", "17:40", "9:35", "6:35", "11:20", "6:55", "8:15", "7:10", "6:15", "12:20" },
    {"13:45", "8:40", "22:45", "16:10", "6:55", "17:15", "7:10", "16:10", "7:40", "20:40", "18:20" }, #Adolfo sé que son valores tipo int pero no me acordaba cómo poner esto ":" ☻☻ y como no hay que hacer cálculos solo mostrar en pantalla...
    {58.75, 7.20, 47.90, 71.80, 2.90, 65.70, 2.15, 77.35, 4.25, 92.30, 55.85},
]


print("-----------AUTOBUSES ARCAS-----------""\n""1) Mostrar rutas.""\n""2) Mostrar rutas que salen de una ciudad.""\n""3) Reservar billete directo entre ciudades.""\n""4) Mostrar billetes reservados.""\n""5) Cerrar el aplicativo.") 
hola = int(input("\n""Selecciona una opción: "))
menu = 0
def mostrar_menu():
     while menu != 0:
         if menu == 1:
            def mostrar_rutas(rutas):
                print("------------------RUTAS------------------")
                ciudad_salida = rutas[0]
                ciudad_llegada = rutas[1]
                hora_salida = rutas[2]
                hora_llegada = rutas[3]
                precio = rutas[4]
           # print(f"CIUDAD SALIDA"+ {ciudad_de_salida})
         elif menu == 2:
             ...
         elif menu == 3:
            ciudad_de_salida = input("Dime la ciudad de salida del billete: ")
            ciudad_de_llegada = input("Dime la ciudad de llegada del billete: ")
            cantidad_billetes = int(input("Dime la cantidad de billetes: "))
            def reservar_billete(rutas):
                while ciudad_de_salida and ciudad_de_llegada == rutas[0] and rutas[1]:
                    print(f"Has reservado {cantidad_billetes} billetes desde {ciudad_de_salida} hasta {ciudad_de_llegada}.")
                else:
                    print(f"Autobuses Arcas no ofrece una ruta directa entre {ciudad_de_salida} y {ciudad_de_llegada}")
            print(reservar_billete)
         elif menu == 3:
             ...
         elif menu == 4:
             ...
         else:
             sys.exit()

