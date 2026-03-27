import unittest
from DireccionMac import *

class DireccionMacTest(unittest.TestCase):
    def direccion_mac_test(self):
        self.assertTrue(DireccionMac.es_direccion_correcta("11:11:11:11:11:11"))
        self.assertFalse(DireccionMac.es_direccion_correcta("11:11:11::"))
        direccion = DireccionMac("11:11:11:11:11:11")
        direccion1 = DireccionMac("11:11:")
        self.assertEqual(direccion, direccion1)

    def test_constructor(self):
        direccionMac = DireccionMac("11:11:11:11:11:11")
        self.assertIsInstance(direccionMac, DireccionMac)

        # Esto no me sale, me da fallo
        with self.assertRaises(ValueError):
            direccionMac = DireccionMac("ERROR EN LA DIRECCION MAC")

if __name__ == "__main__":
    unittest.main()