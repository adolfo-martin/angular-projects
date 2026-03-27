import unittest
from PuntoAcceso import PuntoAcceso
from PuntoAcceso import PuntoAccesoError
from PuntoAcceso import TipoLista
from DireccionMac import DireccionMac

class PuntoAccesoError(unittest.TestCase):

    def test_get_lista_activa(self) -> None:
        punto_acceso = PuntoAcceso()
        self.assertEqual(punto_acceso.lista_activa, TipoLista.NINGUNA)


    def test_get_lista_negra(self) -> None:
        punto_acceso = PuntoAcceso()
        self.assertEqual(punto_acceso.lista_negra, [])


    def test_get_lista_blanca(self) -> None:
        punto_acceso = PuntoAcceso()
        self.assertEqual(punto_acceso.lista_blanca, [])


    def test_get_lista_equipos_conectados(self) -> None:
        punto_acceso = PuntoAcceso()
        self.assertEqual(punto_acceso.lista_equipos_conectados, [])


    def test_activar_lista(self) -> None:
        punto_acceso = PuntoAcceso()
        punto_acceso.activar_lista(TipoLista.LISTA_BLANCA)
        self.assertEqual(punto_acceso.lista_activa, TipoLista.LISTA_BLANCA)
    

    def test_añadir_direccion_a_lista(self) -> None:    
        punto_acceso = PuntoAcceso()
        direccion = DireccionMac("22:44:55:66:66:77")
        punto_acceso.añadir_direccion_a_lista(direccion, TipoLista.LISTA_BLANCA)
        self.assertEqual(punto_acceso.lista_blanca.pop(), direccion)

        punto_acceso.añadir_direccion_a_lista(direccion, TipoLista.LISTA_NEGRA)
        self.assertEqual(punto_acceso.lista_negra.pop(), direccion)

        with self.assertRaises(PuntoAccesoError):
            punto_acceso.añadir_direccion_a_lista(direccion, "hola")

    def test_conectar_equipo_lista_blanca(self) -> None:
        punto_acceso = PuntoAcceso()
        direccion = DireccionMac("22:44:55:66:66:77")
        punto_acceso.activar_lista(TipoLista.LISTA_BLANCA)
        punto_acceso.añadir_direccion_a_lista(direccion, TipoLista.LISTA_BLANCA)
        punto_acceso.conectar_equipo(direccion)
        self.assertEqual(punto_acceso.lista_equipos_conectados.pop(), direccion)

        with self.assertRaises(PuntoAccesoError):
            direccion2= DireccionMac("22:44:55:66:66:88")
            punto_acceso.conectar_equipo(direccion2)



    

if __name__ == "__main__":
    unittest.main()