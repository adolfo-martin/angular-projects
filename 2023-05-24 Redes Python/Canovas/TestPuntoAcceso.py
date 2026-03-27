import unittest
from DireccionMac import *
from PuntoAcceso import *

class PuntoAccesoTest(unittest.TestCase):
    def test_constructor(self):
        pa = PuntoAcceso()
        self.assertIsInstance(pa, PuntoAcceso)

    def test_activar_lista(self):
        pa = PuntoAcceso()
        self.assertTrue(pa.activar_lista(TipoLista.LISTA_BLANCA))
        self.assertTrue(pa.activar_lista(TipoLista.LISTA_NEGRA))


    def test_añadir_direccion_a_lista(self):
        mac = DireccionMac("aa:bb:cc:55:dd:ff")
        pa = PuntoAcceso()
        self.assertTrue(pa.añadir_direccion_a_lista(mac,TipoLista.LISTA_BLANCA))

    def test_conectar_equipo(self):
        pa = PuntoAcceso()
        pa.activar_lista(TipoLista.LISTA_BLANCA)
        mac = DireccionMac("aa:bb:cc:55:dd:ff")
        self.assertTrue(pa.conectar_equipo(mac))


if __name__ == "__main__":
    unittest.main()