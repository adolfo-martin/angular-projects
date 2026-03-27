import unittest
from DireccionMac import DireccionMac, DireccionMacError

class TestDireccionMac(unittest.TestCase):
    def test_init(self):
        
        mac=DireccionMac("11:11:11:11:11:11")
        self.assertIsInstance(mac, DireccionMac)

        with self.assertRaises(DireccionMacError):
            mac=DireccionMac("11:11:11:11:11:11:")

        with self.assertRaises(DireccionMacError):
            mac=DireccionMac("11:11:11:11:11:1")

    def test_getter(self):
        direccionOriginal="11:11:11:11:11:11"
        mac=DireccionMac(direccionOriginal)

        self.assertEqual(mac.direccion, direccionOriginal)

    def test_setter(self):
        direccionOriginal="11:11:11:11:11:11"
        mac=DireccionMac(direccionOriginal)
        mac.direccion="22:22:22:22:22:22"
        self.assertEqual(mac.direccion,"22:22:22:22:22:22")

        with self.assertRaises(DireccionMacError):
            mac=DireccionMac("33")

    def test_equal(self):
        direccionOriginal="11:11:11:11:11:11"
        mac=DireccionMac(direccionOriginal)
        mac1=DireccionMac(direccionOriginal)
        self.assertTrue(DireccionMac.__eq__(mac1, mac))
        
        



    def test_equal_false(self):
        direccionOriginal="11:11:11:11:11:11"
        mac=DireccionMac(direccionOriginal)
        direccionOriginal="11:12:11:11:11:12"
        mac1=DireccionMac(direccionOriginal)
        self.assertFalse(DireccionMac.__eq__(mac1, mac))


    def test_repr(self):
        dir=DireccionMac("22:22:22:22:22:22")
        self.assertEqual(dir.__repr__(), "[DireccionMac]22:22:22:22:22:22")

    def test_es_correcta(self):
        direccion="22:22:22:22:22:22"

        self.assertTrue(DireccionMac.es_correcta(direccion))
        
    
    def test_es_correcta_false(self):
        direccion="22:22:22:22:22:22....."

        self.assertFalse(DireccionMac.es_correcta(direccion))
            
        




        


        


if __name__ == "__main__":
    unittest.main()