import unittest
from DireccionMac import DireccionMac

from PuntoAcceso import PuntoAcceso, PuntoAccesoError
from TipoLista import TipoLista

class TestPuntoAcceso(unittest.TestCase):
    def test_init(self):
        punto_acceso = PuntoAcceso()
        self.assertIsInstance(punto_acceso, PuntoAcceso)

    def test_getter_equipos_conectados(self):
        punto_acceso = PuntoAcceso()
        direccion = DireccionMac('11:11:11:11:11:11')
        lista_direcciones = [direccion]

        punto_acceso.conectar_equipo(direccion)
        self.assertListEqual(punto_acceso.equipos_conectados, lista_direcciones)

    def test_getter_lista_blanca(self):
        punto_acceso = PuntoAcceso()
        direccion = DireccionMac('11:11:11:11:11:11')
        lista_direcciones_permitidas = [direccion]

        punto_acceso.activar_lista(TipoLista.LISTA_BLANCA)
        punto_acceso.añadir_direccion_a_lista(direccion, TipoLista.LISTA_BLANCA)

        self.assertListEqual(punto_acceso.lista_blanca, lista_direcciones_permitidas)

    def test_getter_lista_negra(self):
        punto_acceso = PuntoAcceso()
        direccion = DireccionMac('11:11:11:11:11:11')
        lista_direcciones_no_permitidas = [direccion]

        punto_acceso.activar_lista(TipoLista.LISTA_NEGRA)
        punto_acceso.añadir_direccion_a_lista(direccion, TipoLista.LISTA_NEGRA)

        self.assertListEqual(punto_acceso.lista_negra, lista_direcciones_no_permitidas)

    def test_getter_lista_activa(self):
        punto_acceso = PuntoAcceso()
        self.assertEqual(punto_acceso.lista_activa, TipoLista.NINGUNA)

        punto_acceso.activar_lista(TipoLista.LISTA_BLANCA)
        self.assertEqual(punto_acceso.lista_activa, TipoLista.LISTA_BLANCA)

        punto_acceso.activar_lista(TipoLista.LISTA_NEGRA)
        self.assertEqual(punto_acceso.lista_activa, TipoLista.LISTA_NEGRA)

    def test_activar_lista(self):
        punto_acceso = PuntoAcceso()
        punto_acceso.activar_lista(TipoLista.NINGUNA)
        self.assertEqual(punto_acceso.lista_activa, TipoLista.NINGUNA)

        punto_acceso.activar_lista(TipoLista.LISTA_BLANCA)
        self.assertListEqual(punto_acceso.lista_blanca, [])

        punto_acceso.activar_lista(TipoLista.LISTA_NEGRA)
        self.assertListEqual(punto_acceso.lista_negra, [])

    def test_añadir_direccion_a_la_lista(self):
        punto_acceso = PuntoAcceso()
        direccion1 = DireccionMac('11:11:11:11:11:11')
        
        punto_acceso.activar_lista(TipoLista.LISTA_BLANCA)
        punto_acceso.añadir_direccion_a_lista(direccion1, TipoLista.LISTA_BLANCA)
        with self.assertRaises(PuntoAccesoError):
            punto_acceso.añadir_direccion_a_lista(direccion1, TipoLista.LISTA_BLANCA)

        direccion2 = DireccionMac('22:22:22:22:22:22')
        punto_acceso.activar_lista(TipoLista.LISTA_NEGRA)
        punto_acceso.añadir_direccion_a_lista(direccion2, TipoLista.LISTA_NEGRA)
        with self.assertRaises(PuntoAccesoError):
            punto_acceso.añadir_direccion_a_lista(direccion2, TipoLista.LISTA_NEGRA)

        punto_acceso.activar_lista(TipoLista.NINGUNA)
        with self.assertRaises(PuntoAccesoError):
            punto_acceso.añadir_direccion_a_lista(direccion2, TipoLista.LISTA_NEGRA)

    def test_conectar_equipo(self):
        punto_acceso = PuntoAcceso()
        direccion1 = DireccionMac('11:11:11:11:11:11')

        punto_acceso.conectar_equipo(direccion1)
        with self.assertRaises(Exception):
            punto_acceso.conectar_equipo(direccion1)

        direccion2 = DireccionMac('22:22:22:22:22:22')
        punto_acceso.activar_lista(TipoLista.LISTA_BLANCA)
        punto_acceso.añadir_direccion_a_lista(direccion2, TipoLista.LISTA_BLANCA)
        with self.assertRaises(PuntoAccesoError):
            punto_acceso.conectar_equipo(DireccionMac('33:33:33:33:33:33'))

        direccion3 = DireccionMac('33:33:33:33:33:33')
        punto_acceso.activar_lista(TipoLista.LISTA_NEGRA)
        punto_acceso.añadir_direccion_a_lista(direccion3, TipoLista.LISTA_NEGRA)
        with self.assertRaises(PuntoAccesoError):
            punto_acceso.conectar_equipo(direccion3)


if __name__ == "__main__":
    unittest.main()