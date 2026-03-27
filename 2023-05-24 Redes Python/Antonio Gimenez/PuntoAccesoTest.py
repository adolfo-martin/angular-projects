from PuntoAcceso import *
import unittest

class PuntoAccesoTest(unittest.TestCase):

    def test_construtor(self):
        punto = PuntoAcceso()
        self.assertEqual(punto,punto)

    def test_lista_activa(self):
        tipo = TipoLista.NINGUNA
        self.assertEqual(tipo, TipoLista(self))
    
    def test_lista_blanca(self):
        lista = TipoLista.LISTA_BLANCA
        self.assertEqual(lista, TipoLista.LISTA_BLANCA)

    def test_lista_negra(self):
        lista = TipoLista.LISTA_NEGRA
        self.assertEqual(lista, TipoLista.LISTA_NEGRA)

    def test_equipos_conectados(self):
        direccion = DireccionMac("22:22:22:22:22:22")
        lista = []
        lista.append(direccion)
        self.assertEqual(lista[0],direccion)


if __name__ == "__main__":
    unittest.main()