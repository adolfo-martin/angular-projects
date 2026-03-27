import unittest
from PuntoAcceso import *
from DireccionMac import *

class PuntoAccesoTest(unittest.TestCase):
    def test_constructor(self):
        p_acceso = PuntoAcceso()
        self.assertIsInstance(p_acceso, PuntoAcceso)

if __name__ == "__main__":
    unittest.main()