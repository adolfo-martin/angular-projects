from DireccionMac import DireccionMac, DireccionMacError

from PuntoAcesso import PuntoAcesso,TipoLista, PuntoAcessoError

def monstrar_menu(punto_acceso:PuntoAcesso): 
    
    lista_activa = punto_acceso.lista_activa
    
    if lista_activa == TipoLista.LISTA_BLANCA:
        print("[FILTRO LISTA BLANCA] Menú FILTRADO DE DIRECCIONES MAC:")
    elif lista_activa == TipoLista.LISTA_NEGRA:
        print("[FILTRO LISTA NEGRA] Menú FILTRADO DE DIRECCIONES MAC:")
    else:     
        print("Menú FILTRADO DE DIRECCIONES MAC:")
        
    print("     1. Monstrar direcciones bloqueadas por la lista negra.")
    print("     2. Activar la lista negra.")
    print("     3. Añadir direccion bloqueada a la lista negra.")
    print("     4. Mostrar equipos conectados al punto de acceso.")
    print("     5. Conectar equipo al punto de acceso.")
    print("     6. Mostrar direcciones permitidas por la lista blanca.")
    print("     7. Activar la lista blanca.")
    print("     8. Añadir dirección permitida a la lista blanca.")
    print("     9. Salir")

def mostrar_direcciones_bloquedas_por_lista_negra(punto_acceso:PuntoAcesso) -> None:
    lista_negra = punto_acceso.lista_negra
    
    if len(lista_negra) == 0:
        print("No hay direcciones actualmente en la lista negra.")
    else:
        print("DIRECCIONES BLOQUEDAS POR LISTA NEGRA")
        for direccion in lista_negra:
            print(direccion)
    
def mostrar_direcciones_permitidas_por_la_lista_blanca(punto_acceso:PuntoAcesso) -> None:
    print("DIRECCIONES PERMITIDAS POR LA LISTA BLANCA")

    lista_blanca = punto_acceso.lista_blanca
    
    if len(lista_blanca) == 0:
        print("No hay direcciones en la lista blanca actualmente.")   
    else: 
        for direccion in lista_blanca:
            print(direccion)

def pedir_direccion_mac() -> str:
    return input("Dime la direccion Mac del equipo: ")    

def añadir_direccion_lista_negra(punto_acceso:PuntoAcesso,direccion:DireccionMac) -> None: 
    punto_acceso.añadir_direccion_a_lista(direccion, TipoLista.LISTA_NEGRA)

def añadir_direccion_lista_blanca(punto_acceso:PuntoAcesso, direccion:DireccionMac) -> None:
    punto_acceso.añadir_direccion_a_lista(direccion, TipoLista.LISTA_BLANCA)

def mostrar_equipos_conectados_punto_acceso(punto_acceso : PuntoAcesso) -> None:
    lista_equipos = punto_acceso.equipos_conectados
    
    if len(lista_equipos) == 0:
        print("Lo siento.No hay ningún equipo conectado al punto de acceso.")
    
    print("EQUIPOS CONECTADOS AL PUNTO DE ACCESO")
    for equipo in lista_equipos:
        print(equipo)


def esperar_intro():
    while(str(input("INTRODUCE [INTRO] PARA CONTINUAR:")) != ""):
        pass
        

if __name__ == "__main__":
    
    #Punto de acceso principal
    punto_acceso = PuntoAcesso()
    
    activo = True
    
    while (activo):
        monstrar_menu(punto_acceso)
        opcion = int(input("Seleccione una opción: "))
        
        if opcion == 1:     
            mostrar_direcciones_bloquedas_por_lista_negra(punto_acceso)
        elif opcion == 2:
            print("FILTRADO POR LISTA NEGRA ACTIVADO")
            punto_acceso.activar_lista(TipoLista.LISTA_NEGRA)
        elif opcion == 3:
            try:
                direccion = pedir_direccion_mac()
                direccion = DireccionMac(direccion)
                try: 
                    añadir_direccion_lista_negra(punto_acceso,direccion)
                except PuntoAcessoError as error:
                    print(f"ERROR:{error}")
            except DireccionMacError as error: 
                print(f"ERROR:{error}")
                
            
        elif opcion == 4:
            mostrar_equipos_conectados_punto_acceso(punto_acceso)
        elif opcion == 5:
            try:
                direccion = pedir_direccion_mac()
                direccion = DireccionMac(direccion)
                try:
                    punto_acceso.conectar_equipo(direccion)
                except PuntoAcessoError as error:
                    print(f"ERROR:{error}")
                    
            except DireccionMacError as error: 
                print(f"ERROR:{error}")
        elif opcion == 6:
            mostrar_direcciones_permitidas_por_la_lista_blanca(punto_acceso)
        elif opcion == 7:
            punto_acceso.activar_lista(TipoLista.LISTA_BLANCA)
        elif opcion == 8:
            try:
                direccion = pedir_direccion_mac()
                direccion = DireccionMac(direccion)
                try: 
                    añadir_direccion_lista_blanca(punto_acceso,direccion)
                except PuntoAcessoError as error:
                    print(error)
            except DireccionMacError as error: 
                print(error)
        elif opcion == 9:
            activo = False
            
        esperar_intro()