import unittest

from PuntoAcceso import *
from DireccionMac import *

class PuntoAccesoTest(unittest.TestCase):   

    def test_init(self):    
        #self.assertNotIsInstance(PuntoAcceso(lista_activa = TipoLista, lista_blanca=[], lista_negra=[], lista=[]))
        pass

    def test_lista_activa_getter(self):
        lista1 = TipoLista.LISTA_BLANCA
        self.assertEqual(lista1, TipoLista.LISTA_BLANCA)

        lista1 = TipoLista.LISTA_NEGRA
        self.assertEqual(lista1, TipoLista.LISTA_NEGRA)

        lista1 = TipoLista.NINGUNA
        self.assertEqual(lista1, TipoLista.NINGUNA)

    def test_lista_negra_getter(self):
        lista = [DireccionMac("11:11:11:11:11:11"), DireccionMac("21:11:11:11:11:11"), DireccionMac("31:11:11:11:11:11")]
        self.assertTrue(lista[0].direccion == "11:11:11:11:11:11")
        self.assertFalse(lista[1].direccion == "11:11:11:11:11:11")
        self.assertFalse(lista[2].direccion == "11:11:11:11:11:11")

    def test_lista_negra_getter(self):
        lista = [DireccionMac("12:11:11:11:11:11"), DireccionMac("22:11:11:11:11:11"), DireccionMac("32:11:11:11:11:11")]
        self.assertTrue(lista[0].direccion == "12:11:11:11:11:11")
        self.assertFalse(lista[1].direccion == "12:11:11:11:11:11")
        self.assertFalse(lista[2].direccion == "12:11:11:11:11:11")

    def test_equipos_conectados_getter(self):
        lista = [DireccionMac("99:99:99:99:99:99"), DireccionMac("88:88:88:88:88:88")]
        self.assertTrue(lista[0].direccion == "99:99:99:99:99:99")
        self.assertFalse(lista[1].direccion == "12:11:11:11:11:11")
        self.assertTrue(lista[1].direccion == "88:88:88:88:88:88")

    def test_activar_lista(self):
        #valor: TipoLista
        #PuntoAcceso.activar_lista(valor)

        #self.assertTrue(valor == TipoLista.NINGUNA)
        pass

    def test_añadir_direccion_a_lista(self):
        pass
        #direccion = DireccionMac("77:77:77:77:77:77")
        #tipo = TipoLista.LISTA_NEGRA
        #punto = PuntoAcceso(lista_activa = TipoLista, lista_blanca=[], lista_negra=[], lista=[])
        #with self.assertRaises(DireccionMacError, msg="Error al añadir direccion a la lista"):
            #punto.añadir_direccion_a_lista(direccion, tipo)


    def test_conectar_equipo(self):
        pass
        #direccion = DireccionMac("77:77:77:77:77:77")
        #punto = PuntoAcceso(lista_activa = TipoLista, lista_blanca=[], lista_negra=[], lista=[])
        #with self.assertRaises(DireccionMacError, msg="Error al añadir direccion a la lista"):
            #punto.conectar_equipo(direccion)

if __name__ == "__main__":
    unittest.main()