from ast import List
import unittest

from DireccionMac import DireccionMac
from PuntoAcceso import PuntoAcceso
from TipoLista import TipoLista

class PuntoAccesoTest:
    #test activar listas.
    def test_activar_lista(self):
        #direccionMac = DireccionMac('11:11:11:11:11:11')
        punto = PuntoAcceso()
        List[DireccionMac] = '11:11:11:11:11:11'
        lista_negra = TipoLista.LISTA_NEGRA
        self.assertEqual(punto.activar_lista(lista_negra))

        List[DireccionMac] = '11:11:11:11:11:12'
        lista_blanca = TipoLista.LISTA_BLANCA
        self.assertEqual(punto.activar_lista(lista_blanca))

        List[DireccionMac] = '11:11:11:11:11:13'
        lista_vacia = TipoLista.LISTA_NINGUNA
        self.assertEqual(punto.activar_lista(lista_vacia))

    #test añadir dirección
    def test_añadir_direccion_a_la_lista(self):
        direccionMac = DireccionMac('11:11:11:11:11:11')
        lista_negra = TipoLista.LISTA_NEGRA
        self.assertEqual(PuntoAcceso.añadir_direccion_a_lista(direccionMac, lista_negra))

        direccionMac = DireccionMac('11:11:11:11:11:12')
        lista_blanca = TipoLista.LISTA_BLANCA
        self.assertEqual(direccionMac, lista_blanca,PuntoAcceso.añadir_direccion_a_lista())


if __name__ == "__main__":
    unittest.main()
