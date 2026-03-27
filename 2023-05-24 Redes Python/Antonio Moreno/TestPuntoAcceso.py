from unittest import TestCase
import unittest
from DireccionMac import DireccionMac, DireccionMacError
from PuntoAcceso import PuntoAcceso, PuntoAccesoError, TipoLista

class TestPuntoAcceso(unittest.TestCase):

    def testInit(self):
        
        punto = PuntoAcceso()
        self.assertIsInstance(punto, PuntoAcceso)

    def testGetterListaActiva(self):

        punto = PuntoAcceso()
        self.assertEqual(TipoLista.NINGUNA, punto.lista_activa)


    def testGetterListaBlanca(self):
        punto = PuntoAcceso()
        punto.activar_lista(TipoLista.LISTA_BLANCA)
        punto.añadir_direccion_a_lista("11:22:33:44:55:66")
        self.assertListEqual(["11:22:33:44:55:66"], punto.lista_blanca)


    def testGetterListaNegra(self):
        punto = PuntoAcceso()
        punto.activar_lista(TipoLista.LISTA_NEGRA)
        punto.añadir_direccion_a_lista("11:22:33:44:55:66")
        self.assertListEqual(["11:22:33:44:55:66"], punto.lista_negra)


    def testGetterEquiposConectados(self):
        punto = PuntoAcceso()
        punto.conectar_equipo("11:22:33:44:55:66")
        self.assertListEqual(["11:22:33:44:55:66"], punto.equipos_conectados)


    def testActivarLista(self):
        punto = PuntoAcceso()
        punto.activar_lista(TipoLista.LISTA_BLANCA)
        self.assertEqual(TipoLista.LISTA_BLANCA, punto.lista_activa)
        punto.activar_lista(TipoLista.LISTA_NEGRA)
        self.assertEqual(TipoLista.LISTA_NEGRA, punto.lista_activa)
        punto.activar_lista(TipoLista.NINGUNA)
        self.assertEqual(TipoLista.NINGUNA, punto.lista_activa)


    def testAñadirDireccion(self):
        punto = PuntoAcceso()
        punto.activar_lista(TipoLista.LISTA_BLANCA)
        punto.añadir_direccion_a_lista("22:33:44:55:66:77")
        self.assertListEqual(["22:33:44:55:66:77"], punto.lista_blanca)

        with self.assertRaises(DireccionMacError):
            punto.añadir_direccion_a_lista("")

        punto.activar_lista(TipoLista.LISTA_NEGRA)
        punto.añadir_direccion_a_lista("22:33:44:55:66:77")
        self.assertListEqual(["22:33:44:55:66:77"], punto.lista_negra)
        
        with self.assertRaises(DireccionMacError):
            punto.añadir_direccion_a_lista("")

    
    def testConectarEquipo(self):
        punto = PuntoAcceso()
        punto.conectar_equipo("22:33:44:55:66:77")
        self.assertListEqual(["22:33:44:55:66:77"], punto.equipos_conectados)

        with self.assertRaises(PuntoAccesoError):
            punto.conectar_equipo("22:33:44:55:66:77")

        with self.assertRaises(DireccionMacError):
            punto.conectar_equipo("")

        with self.assertRaises(PuntoAccesoError):
            punto.activar_lista(TipoLista.LISTA_NEGRA)
            punto.añadir_direccion_a_lista("22:33:44:55:66:77")
            punto.conectar_equipo("22:33:44:55:66:77")
        

if __name__ == "__main__":
    unittest.main()