import unittest
from PuntoAcceso import PuntoAcceso,PuntoAccesoError
from TipoLista import TipoLista
from DireccionMac import DireccionMac

class PuntoAccesoTest(unittest.TestCase):
    def test_constructor(self) -> None:
        punto_acceso = PuntoAcceso()
        self.assertIsInstance(punto_acceso,PuntoAcceso)

    def test_getters(self) -> None:
        punto_acceso = PuntoAcceso()

        self.assertListEqual(punto_acceso.equipos_conectadas, [])
        self.assertListEqual(punto_acceso.lista_blanca, [])
        self.assertListEqual(punto_acceso.lista_negra, [])
        self.assertEqual(punto_acceso.lista_activa, TipoLista.NINGUNA)

    def test_activar_lista(self) -> None:
        punto_acceso = PuntoAcceso()

        punto_acceso.activar_lista(TipoLista.LISTA_BLANCA)
        self.assertEqual(punto_acceso.lista_activa, TipoLista.LISTA_BLANCA)

        punto_acceso.activar_lista(TipoLista.LISTA_NEGRA)
        self.assertEqual(punto_acceso.lista_activa, TipoLista.LISTA_NEGRA)

    def test_añadir_direccion_a_lista(self) -> None:
        punto_acceso = PuntoAcceso()
        direccion_mac1 = DireccionMac("11:11:11:11:11:11")
        direccion_mac2 = DireccionMac("11:11:11:11:11:22")
        direccion_mac3 = DireccionMac("11:11:11:11:11:33")
        direccion_mac4 = DireccionMac("11:11:11:11:11:44")



        punto_acceso.añadir_direccion_a_lista(direccion_mac1,TipoLista.LISTA_BLANCA)
        self.assertListEqual(punto_acceso.lista_blanca,[direccion_mac1])

        punto_acceso.añadir_direccion_a_lista(direccion_mac2,TipoLista.LISTA_BLANCA)
        self.assertListEqual(punto_acceso.lista_blanca,[direccion_mac1,direccion_mac2])


        punto_acceso.añadir_direccion_a_lista(direccion_mac3,TipoLista.LISTA_NEGRA)
        self.assertListEqual(punto_acceso.lista_negra,[direccion_mac3])

        punto_acceso.añadir_direccion_a_lista(direccion_mac4,TipoLista.LISTA_NEGRA)
        self.assertListEqual(punto_acceso.lista_negra,[direccion_mac3,direccion_mac4])

        with self.assertRaises(PuntoAccesoError):
            punto_acceso.añadir_direccion_a_lista(direccion_mac1,TipoLista.NINGUNA)

    def test_conectar_equipo(self) -> None:
        punto_acceso = PuntoAcceso()
        direccion_mac0 = DireccionMac("11:11:11:11:11:AA")
        direccion_mac1 = DireccionMac("11:11:11:11:11:11")
        direccion_mac2 = DireccionMac("11:11:11:11:11:22")
        direccion_mac3 = DireccionMac("11:11:11:11:11:33")
        direccion_mac4 = DireccionMac("11:11:11:11:11:44")
        direccion_mac5 = DireccionMac("11:11:11:11:11:55")
        direccion_mac6 = DireccionMac("11:11:11:11:11:66")

        punto_acceso.añadir_direccion_a_lista(direccion_mac1,TipoLista.LISTA_BLANCA)
        punto_acceso.añadir_direccion_a_lista(direccion_mac2,TipoLista.LISTA_BLANCA)
        punto_acceso.añadir_direccion_a_lista(direccion_mac3,TipoLista.LISTA_NEGRA)
        punto_acceso.añadir_direccion_a_lista(direccion_mac4,TipoLista.LISTA_NEGRA)

        punto_acceso.conectar_equipo(direccion_mac0)

        punto_acceso.activar_lista(TipoLista.LISTA_BLANCA)
        punto_acceso.conectar_equipo(direccion_mac1)

        with self.assertRaises(PuntoAccesoError):
            punto_acceso.conectar_equipo(direccion_mac3)

        with self.assertRaises(PuntoAccesoError):
            punto_acceso.conectar_equipo(direccion_mac5)

        punto_acceso.activar_lista(TipoLista.LISTA_NEGRA)
        punto_acceso.conectar_equipo(direccion_mac2)
        punto_acceso.conectar_equipo(direccion_mac6)

        with self.assertRaises(PuntoAccesoError):
            punto_acceso.conectar_equipo(direccion_mac4)

if __name__ == "__main__":
    unittest.main()