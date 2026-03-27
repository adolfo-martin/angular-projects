import sys
def Menu() -> None:
    print('****MENU FILTRADO DE DIRECCIONES****')
    print ('    1. Mostrar direcciones bloqueadas por la lista negra.')
    print ('    2. Activar la lista negra.')
    print ('    3. Añadir direccion Bloqueada a la lista negra.')
    print ('    4. Mostrar equipos conectados al punto de acceso.')
    print ('    5. Conectar equipo al punto de acceso.')
    print ('    6. Mostrar direcciones permitidas por la lista blanca.')
    print ('    7. Activar la lista blanca.')
    print ('    8. Añadir dirección permitida a la lista blanca.')
    print ('    9. Salir')

    input('Seleccione una opcion: ')
    

if __name__ == "__main__":
    Menu()