import unittest
from DireccionMac import DireccionMac, DireccionMacError

class DireccionMacTest(unittest.TestCase):

    def test_es_direccion_correcta(self):
        self.assertFalse(DireccionMac.es_direccion_correcta("11:11:11:11:11:1"), "La longitud del argumento no es válida")
        self.assertFalse(DireccionMac.es_direccion_correcta("11:11:11:11:11:11:"),"La longitud del argumento no es válida")

        
        self.assertTrue(DireccionMac.es_direccion_correcta("11:11:11:11:11:11"))


    def test_init(self):
        with self.assertRaises(DireccionMacError, msg="ERROR: El argumento pasado como dirección MAC no es correcto"):
            DireccionMac("hola")


    def test_direccion_getter(self):
        direccion_mac = DireccionMac("11:11:11:11:11:11")
        self.assertEqual(direccion_mac.direccion_mac, "11:11:11:11:11:11")

    

    def test_direccion_setter(self):
        direccion_mac = DireccionMac("00:00:00:00:00:00")
        self.assertNotEqual(direccion_mac.direccion_mac, "11:11:11:11:11:11", "Los objetos no son iguales")

        direccion_mac.direccion_mac = "11:11:11:11:11:11"
        self.assertEqual(direccion_mac.direccion_mac, "11:11:11:11:11:11")




if __name__ == "__main__":
    unittest.main()