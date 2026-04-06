import unittest
from Direccion import CuatroOctetos, CuatroOctetosError, Direccion, Mascara, MascaraError


class TestProyectoDireccionesRed(unittest.TestCase):

    # test_clase_CuatroOctetos()

    # direccion = Direccion(24)
    # print(direccion)
    # direccion = Direccion('255.255.0.0')
    # print(direccion)
    # direccion = Direccion(8)
    # print(direccion)
    # direccion = Direccion('255.0.0.0')
    # print(direccion)
    # direccion = Direccion(14)
    # print(direccion)
    # direccion = Direccion('255.192.0.0')
    # print(direccion)

    def test__init_CuatroOctetos_ok(self):
        octetos1 = CuatroOctetos('255.255.255.0')
        self.assertEqual(octetos1.obtener_octetos(), '255.255.255.0')
        octetos2 = CuatroOctetos('192.168.1.1')
        self.assertEqual(octetos2.obtener_octetos(), '192.168.1.1')

    def test__init_CuatroOctetos_fail(self):
        with self.assertRaises(CuatroOctetosError):
            CuatroOctetos(1)

        with self.assertRaises(CuatroOctetosError):
            CuatroOctetos('a')

        with self.assertRaises(CuatroOctetosError):
            CuatroOctetos('0.0.0')

        with self.assertRaises(CuatroOctetosError):
            CuatroOctetos('0.0.0.0.0')

        with self.assertRaises(CuatroOctetosError):
            CuatroOctetos('256.0.0.0')

    def test__init_Direccion_ok(self):
        direccion = Direccion('255.255.255.0')
        self.assertEqual(direccion.obtener_octetos(), '255.255.255.0')
        direccion = Direccion('192.168.1.1')
        self.assertEqual(direccion.obtener_octetos(), '192.168.1.1')

    def test__init_Direccion_fail(self):
        with self.assertRaises(CuatroOctetosError):
            Direccion(1)

        with self.assertRaises(CuatroOctetosError):
            Direccion('a')

        with self.assertRaises(CuatroOctetosError):
            Direccion('0.0.0')

        with self.assertRaises(CuatroOctetosError):
            Direccion('0.0.0.0.0')

        with self.assertRaises(CuatroOctetosError):
            Direccion('256.0.0.0')

    def test__init_Mascara_ok(self):
        mascara = Mascara(24)
        self.assertEqual(mascara.obtener_octetos(), '255.255.255.0')
        mascara = Mascara('255.255.0.0')
        print(mascara)
        mascara = Mascara(8)
        print(mascara)
        mascara = Mascara('255.0.0.0')
        print(mascara)
        mascara = Mascara(14)
        print(mascara)
        mascara = Mascara('255.192.0.0')
        print(mascara)

    def test__init_Mascara_fail(self):
        with self.assertRaises(MascaraError):
            Mascara(33)


if __name__ == '__main__':
    unittest.main()
