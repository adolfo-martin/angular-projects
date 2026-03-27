from enum import Enum, auto


class DireccionMac:

    def __init__(self, direccion: str):

        self.__direccion = direccion

        if not (es_direccion_correcta(self.__direccion)):
            print("Error en direccion MAC. No es correcta.")

    @property
    def DireccionMac_setter(self, direccion: str) -> str:
        if not (es_direccion_correcta(self.__direccion)):
            print("Error en direccion MAC. No es correcta.")
        else:
            self.__direccion = direccion

    @property
    def DireccionMac_getter(self) -> str:
        return self.__direccion

    def __repr__(self) -> str:

        print("[DireccionMac]" + self.__direccion)

    def __eq__(self, PuntoAcceso) -> bool:
        if (self.__direccion == PuntoAcceso.direccion()):
            return True
        else:
            return False


def es_direccion_correcta(direccion: str) -> bool:
    if (len(direccion) == 17):
        return True
    else:
        return False


class TipoLista(Enum):
    NINGUNA = auto()
    LISTA_BLANCA = auto()
    LISTA_NEGRA = auto()


class PuntoAcceso:

    def __init__(self):
        __lista_activa: TipoLista
        __lista_negra: list[DireccionMac]
        __lista_blanca: list[DireccionMac]
        __equipos_conectados: list[DireccionMac]

    def activar_lista(tipo_lista: TipoLista) -> None:
        __lista_negra: list[DireccionMac.DireccionMac_getter]
        __lista_blanca: list[DireccionMac.DireccionMac_getter]

    def añadir_direccion_a_lista(direccion: DireccionMac, tipo_lista: TipoLista) -> None:
        __lista_negra: list[DireccionMac.DireccionMac_getter].remove
        __lista_blanca: list[DireccionMac.DireccionMac_getter].append

    def conectar_equipo(self, direccion: DireccionMac) -> None:
        if (self.__equipos_conectados.contains(DireccionMac.DireccionMac_getter)):
            print("error. ya esta añadido.")
        else:
            self.__equipos_conectados.append(DireccionMac.DireccionMac_getter)


class InterfazUsuario:
    def __init__(self):
        pass

    def mostar_menu():

        salir = False
        MAC = 0
        while (salir == False):
            print("Menú FILTRADO DE DIRECCIONES MAC:")
            print("        1. Mostrar direcciones bloqueadas por la lista negra.")
            print("        2. Activar la lista negra.")
            print("        3. Añadir direccion bloqueada a la lista negra.")
            print("        4. Mostrar equipos conectados al punto de acceso.")
            print("        5. Conectar equipo al punto de acceso.")
            print("        6. Mostrar direcciones permitidas por la lista blanca.")
            print("        7. Activar la lista blanca.")
            print("        8. Añadir dirección permitida a la lista blanca.")
            print("        9. Salir.")

            opcion = input(print("Selecciona una opción: "))

            match(opcion):
                case 1:
                    for i in range(len(DireccionMac)):
                        print(DireccionMac[i])
                case 2:
                    PuntoAcceso.activar_lista()
                case 3:
                    MAC = input(print("Introducir dirección: "))
                    DireccionMac.append(MAC)
                case 4:
                    for i in range(len(DireccionMac)):
                        if (PuntoAcceso.conectar_equipo(DireccionMac[i])):
                            print(DireccionMac[i])
                case 5:
                    MAC = input(print("Introducir dirección: "))
                    PuntoAcceso.conectar_equipo(MAC)
                case 6:
                    for i in range(len(DireccionMac)):
                        print(DireccionMac[i])
                case 7:
                    PuntoAcceso.activar_lista()
                case 8:
                    MAC = input(print("Introducir dirección: "))
                    DireccionMac.append(MAC)
                case 9:
                    salir = True
