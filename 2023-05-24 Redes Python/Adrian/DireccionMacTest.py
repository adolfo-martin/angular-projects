import unittest
from DireccionMac import *

class direccionMacTest (unittest.TestCase):
    def test_direccion_mac(self):
        self.assertTrue(DireccionMac.es_direccion_correcta("11:22:33:44:55:66"))
        self.assertFalse(DireccionMac.es_direccion_correcta("11:a"))
        direccion = DireccionMac("11:22:33:44:55:66")
        direccion2 = DireccionMac("11:22:33:44:55:66")
        self.assertEqual(direccion, direccion2)

    def test_constructor(self):
        direccionMac = DireccionMac("11:22:33:44:55:66")
        self.assertIsInstance(direccionMac, DireccionMac)

        with self.assertRaises(DireccionMacError):
            direccion = DireccionMac("Hola")


if __name__ == "__main__":
    unittest.main()