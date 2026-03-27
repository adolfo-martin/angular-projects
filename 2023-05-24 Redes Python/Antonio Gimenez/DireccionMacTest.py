import unittest
from DireccionMac import *

class DireccionMacTest(unittest.TestCase):
    def test_direccion(self):
        self.assertFalse(DireccionMac.es_direccion_correcta("22:22"))
        self.assertTrue(DireccionMac.es_direccion_correcta("22:22:22:22:22:22"))
    

    def test_constructor(self):
        direccion = DireccionMac("22:22:22:22:22:22")
        self.assertEqual(direccion,direccion)

    
            




if __name__ == "__main__":
    unittest.main()
