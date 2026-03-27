from PuntoAcceso import PuntoAcceso


print("Menú FILTRADO DE DIRECCIONES MAC:")
print("\t\t1. Mostrar direcciones bloqueadas por la lista negra")
print("\t\t2. Activar la lista negra")
print("\t\t3. Añadir dirección bloqueada a la lista negra")
print("\t\t4. Mostrar equipos conectados al punto de acceso")
print("\t\t5. Conectar equipo al punto de acceso")
print("\t\t6. Mostrar direcciones permitidas")
print("\t\t7. Activar la lista blanca")
print("\t\t8. Añadir dirección permitida a la lista negra")
print("\t\t9. Salir")

opcion = input("Seleciona una opción: ")

if opcion == "1":
    for lista in len(PuntoAcceso.__lista_negra):
        print(lista)
    
