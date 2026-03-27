import unittest
from PuntoAcceso import *
from DireccionMac import *
from TipoLista import *

class PuntoAccesoTest(unittest.TestCase):
    def test_constructor(self) -> None:
        puntoAcceso = PuntoAcceso()
        self.assertIsInstance(puntoAcceso, PuntoAcceso)

    def test_lista_activa_getter(self) -> None:
        puntoAcceso = PuntoAcceso()
        self.assertEqual(puntoAcceso.lista_activa, TipoLista.NINGUNA)


    def test_lista_negra_getter(self) -> None:
        puntoAcceso = PuntoAcceso()
        lista = []
        self.assertListEqual(puntoAcceso.lista_negra, lista)


    def test_lista_blanca_getter(self) -> None:
        puntoAcceso = PuntoAcceso()
        lista = []
        self.assertListEqual(puntoAcceso.lista_blanca, lista)

    
    def test_equipos_conectados(self) -> None:
        puntoAcceso = PuntoAcceso()
        listaTest = []
        self.assertListEqual(puntoAcceso.equipos_conectados, listaTest)


    def test_activar_lista(self) -> None:
        puntoAcceso = PuntoAcceso()
        puntoAcceso.activar_lista(TipoLista.LISTA_NEGRA)
        self.assertEqual(puntoAcceso.lista_activa, TipoLista.LISTA_NEGRA)
 


    def test_añadir_direccion_a_lista(self) -> None:
        puntoAcceso = PuntoAcceso()
        direccion = DireccionMac("11:22:33:44:55:66")

        lista_incorrecta = []
        with self.assertRaises(PuntoAccesoError):
            puntoAcceso.añadir_direccion_a_lista(direccion, lista_incorrecta)


if __name__ == "__main__":
    unittest.main()