import unittest
from DireccionMac import *

class DireccionMacTest(unittest.TestCase):
    def test_constructor(self):
        mac = DireccionMac("aa:bb:cc:dd:ee:ff")
        self.assertIsInstance(mac, DireccionMac)
    
    def test_es_direccion_correcta(self):
        mac1 = "aa:bb:cc:dd:ff"
        self.assertFalse(DireccionMac.es_direccion_correcta(self, mac1))
        mac2 = "aa:bb:cc:55:dd:ff"
        self.assertTrue(DireccionMac.es_direccion_correcta(self, mac2))



if __name__ == "__main__":
    unittest.main()