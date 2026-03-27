import unittest

from DireccionMac import DireccionMac


class DireccionMacTest(unittest.TestCase):



    def test_es_direccion_correcta(self):
        self.assertFalse(DireccionMac.es_direccion_correcta("11:11:11:11:11:1"))
        self.assertTrue(DireccionMac.es_direccion_correcta("11:11:11:11:11:11"))

    def test_init(self):
        #with self.assertRaises(DireccionMacError, msg="La direccion no es una direccion mac"):
            #DireccionMac("123")
        #self.assertNotIsInstance(DireccionMac("11:11:11:11:11:11"), DireccionMac)
        pass


    def test_direccion_getter(self):
        direccion = DireccionMac("11:11:11:11:11:11")
        self.assertEqual(direccion.direccion, "11:11:11:11:11:11")
        self.assertNotEqual(direccion.direccion, "22:22:22:22:22:22")

    def test_direccion_setter(self):
        direccion = DireccionMac("11:11:11:11:11:11")
        direccion.direccion("22:22:22:22:22:22")
        self.assertTrue(direccion.direccion == "22:22:22:22:22:22")
    
    
    def test_eq(self):
        direccion1 = DireccionMac("11:11:11:11:11:11")
        direccion2 = DireccionMac("11:11:11:11:11:11")
        
        self.assertTrue(direccion1 == direccion2)

if __name__ == "__main__":
    unittest.main()