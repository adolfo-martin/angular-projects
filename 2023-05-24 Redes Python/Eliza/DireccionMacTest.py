import unittest

from DireccionMac import DireccionMac

class DireccionMacTest(unittest.TestCase):
    #Test del constructor
    def test_init(self):
        direccionMac = DireccionMac('11:11:11:11:11:11')
        self.assertIsInstance(direccionMac, DireccionMac) #ok porque direccionMac es un objeto de DireccionMac.

    #Test getter
    def test_getter(self):
        direccionMac = DireccionMac('11:11:11:11:11:11')
        self.assertEqual('11:11:11:11:11:11', direccionMac.direccion) #ok porque ambas cadenas son iguales.

    #Test setter
    def test_setter(self):
        direccionMac = DireccionMac('11:11:11:11:11:11')

        direccionMac.direccion = '11:11:11:11:11:12'
        self.assertEqual('11:11:11:11:11:12', direccionMac.direccion)


    #Test equals
    def test_equals(self):
        direccionMac1 = DireccionMac('11:11:11:11:11:11')
        direccionMac2 = DireccionMac('11:11:11:11:11:11')
        self.assertEqual(direccionMac1, direccionMac2)

    #Test es_correcta
    def test_es_correcta(self):
        direccionMac1 = DireccionMac('11:11:11:11:11:11') #BIEN
        self.assertTrue(direccionMac1)
        

    #test raise
    def test_raise(self):
        
        with self.assertRaises(Exception):
            direccionMac1 = DireccionMac('11:11:11:11:11:1') #MAL es OK porque salta el raise
            self.assertTrue(direccionMac1)

        with self.assertRaises(Exception):
            direccionMac1 = DireccionMac('11:11:11:11:11:11:') #MAL es OK porque salta el raise
            self.assertTrue(direccionMac1)


if __name__ == "__main__":
    unittest.main()