import unittest

from DireccionMac import DireccionMac, DireccionMacError

class TestDireccionMac(unittest.TestCase):
    def test_init(self):
        direccion = DireccionMac('11:11:11:11:11:11')
        self.assertIsInstance(direccion, DireccionMac)

    def test_es_direccion_correcta(self):
        with self.assertRaises(DireccionMacError):
            direccion1 = DireccionMac('1')

    def test_getter(self):
        direccion = DireccionMac('11:11:11:11:11:11')
        self.assertEqual(direccion.get_direccion, '11:11:11:11:11:11')

    def test_setter(self):
        direccion = DireccionMac('11:11:11:11:11:11')
        direccion.set_direccion = '22:22:22:22:22:22'
        self.assertEqual(direccion.get_direccion, '22:22:22:22:22:22')

    def test_repr(self):
        direccion = DireccionMac('11:11:11:11:11:11')
        self.assertEqual(str(direccion), '[DireccionMac] 11:11:11:11:11:11')

    def test_eq(self):
        direccion1 = DireccionMac('11:11:11:11:11:11')
        direccion2 = DireccionMac('11:11:11:11:11:11')

        self.assertEqual(direccion1, direccion2)
        self.assertTrue(direccion1 == direccion2)



if __name__ == "__main__":
    unittest.main()

