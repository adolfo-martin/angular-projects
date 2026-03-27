import unittest
from DireccionMac import *


class DireccionMacTest(unittest.TestCase):
    
    def test_constructor(self) -> None:
        direccion = DireccionMac("11:22:33:44:55:66")
        self.assertIsInstance(direccion, DireccionMac)

        with self.assertRaises(DireccionMacError):
            direccion = DireccionMac("11:33:22")


    def test_getter(self) -> None:
        direccion = DireccionMac("11:22:33:44:55:66")
        self.assertEqual(direccion.direccion_mac, "11:22:33:44:55:66")


    def test_setter(self) -> None:
        direccion = DireccionMac("11:22:33:44:55:66")
        direccion.direccion_mac = "22:33:44:55:66:77"
        self.assertEqual(direccion.direccion_mac, "22:33:44:55:66:77")

    def test_es_direccion_correcta(self) -> None:
        direccion = DireccionMac("11:22:33:44:55:66")
        self.assertFalse(direccion.es_direccion_correcta("12:42:42:3"))
        self.assertFalse(direccion.es_direccion_correcta(""))
        self.assertTrue(direccion.es_direccion_correcta("12345678912345678"))
    

if __name__ == "__main__":
    unittest.main()