
from DireccionMac import DireccionMac

from PuntoAcceso import PuntoAcceso, PuntoAccesoError
from TipoLista import TipoLista

def main():
    opcion : str = ''

    while opcion != '9':
        imprimir_menu()
        opcion = input()

        match opcion:
            case '1': 
                print('Lista de Direcciones Bloqueadas: \n')
                PuntoAcceso.mostrar_lista_negra()

            case '2':
                tipo_str : str = input()
                tipo_lista : TipoLista= PuntoAcceso.asignar_tipo(tipo_str)
            
                # tipo_lista : TipoLista = TipoLista.LISTA_NEGRA
                PuntoAcceso.activar_lista(tipo_lista)
                print('La lista negra ha sido activada')

            case '3':
                print('Introduce la dirección Mac a bloquear:')
                direccion_str: str = input()
                direccion : DireccionMac = DireccionMac(direccion_str)
                
                tipo_lista : TipoLista = TipoLista.LISTA_NEGRA

                PuntoAcceso.añadir_direccion_a_lista(tipo_lista, direccion)

            case '4':
                print('Lista de Equipos Conectados al Punto de Acceso: \n')
                PuntoAcceso.mostrar_equipos_conectados()

            case '5':
                print('Introduce la Dirección Mac del equipo:')
                direccion_str: str = input()
                direccion : DireccionMac = DireccionMac(direccion_str)

                if PuntoAcceso.existe_en_lista_blanca(direccion) == False:
                    raise PuntoAccesoError ('La dirección no está en la lista blanca')
                elif PuntoAcceso.existe_en_lista_negra(direccion) == True:
                    raise PuntoAccesoError ('La dirección está en la lista negra')

                PuntoAcceso.conectar_equipo(direccion)

            case '6':
                print('Lista de Direcciones Permitidas: \n')
                PuntoAcceso.mostrar_lista_blanca()

            case '7':
                tipo_lista : TipoLista = TipoLista.LISTA_BLANCA
                PuntoAcceso.activar_lista(tipo_lista)
                print('La lista blanca ha sido activada')

            case '8':
                print('Introduce la dirección Mac a dar acceso:')
                direccion_str: str = input()
                direccion : DireccionMac = DireccionMac(direccion_str)
                
                tipo_lista : TipoLista = TipoLista.LISTA_BLANCA

                PuntoAcceso.añadir_direccion_a_lista(tipo_lista, direccion)

            case '9': break


def imprimir_menu() -> None:
    print ('Menu Filtrado de direcciones MAC:')
    print ('1. Mostrar direcciones bloqueadas por la lista negra')
    print ('2. Activar la lista negra')
    print ('3. Añadir dirección bloqueada por la lista negra')
    print ('4. Mostrar equipos conectados al punto de acceso')
    print ('5. Conectar equipo al punto de acceso')
    print ('6. Mostrar direcciones permitidas por la lista blanca')
    print ('7. Activar la lista blanca')
    print ('8. Añadir dirección permitida a la lista blanca')
    print ('9. Salir')
    print ('Selecciona una opcion: ')


if __name__ == "__main__":
    main()