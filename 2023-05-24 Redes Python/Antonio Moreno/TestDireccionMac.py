from unittest import TestCase
import unittest
from DireccionMac import DireccionMac, DireccionMacError

class TestDireccionMac(unittest.TestCase):


    def testInit(self):
        direccion = DireccionMac("11:22:33:44:55:66")
        self.assertIsInstance(direccion,DireccionMac)
        
        with self.assertRaises(DireccionMacError):
            direccion = DireccionMac("")
        

    def testGetter(self):
        direccion = DireccionMac("11:22:33:44:55:66")
        self.assertEqual(direccion.direccionMac,"11:22:33:44:55:66")


    def testSetter(self):
        direccion = DireccionMac("11:22:33:44:55:66")
        direccion.__direccionMac = "22.33.44.55.66.77"
        self.assertEqual(direccion.__direccionMac,"22.33.44.55.66.77")

        with self.assertRaises(DireccionMacError):
            
            direccion = DireccionMac("")


    def testEsCorrecta(self):
        direccion = "11:22:33:44:55:66"
        self.assertTrue(DireccionMac.esCorrecta(direccion))
        direccion2 = "11:22:33:44:55:66:77"
        self.assertFalse(DireccionMac.esCorrecta(direccion2))
        direccion3 = "11:22:33:44:55"
        self.assertFalse(DireccionMac.esCorrecta(direccion3))

        
if __name__ == "__main__":
    unittest.main()