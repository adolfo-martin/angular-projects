import unittest

from DireccionMac import DireccionMac, DireccionMacError

class DireccionMacTest(unittest.TestCase):
    
    def test_init(self) -> None:
        direccion = DireccionMac("1F:32:25:1F:G9:87")
        self.assertIsInstance(direccion, DireccionMac)

        with self.assertRaises(DireccionMacError):
            DireccionMac("1F:32:25:1F:G9:8")

        with self.assertRaises(DireccionMacError):
            DireccionMac("")

    def test_get_direccion(self) -> None:
        direccion = DireccionMac("1F:32:25:1F:G9:87")
        self.assertEqual(direccion.direccion, "1F:32:25:1F:G9:87")

    def test_set_direccion(self) -> None:
        direccion = DireccionMac("1F:32:25:1F:G9:87")
        direccion.set_direccion("1F:32:25:1F:G9:90")
        self.assertEqual(direccion.direccion, "1F:32:25:1F:G9:90")

        with self.assertRaises(DireccionMacError):
            direccion.set_direccion("1F:32:25:1F:G9:8")

        with self.assertRaises(DireccionMacError):
            direccion.set_direccion("")

    def test_eq_direccion(self) -> None:
        direccion = DireccionMac("1F:32:25:1F:G9:87")
        direccion2 = DireccionMac("1F:32:25:1F:G9:87")
        direccion3 = DireccionMac("1F:32:25:1F:G9:88")
        
        self.assertTrue(direccion.__eq__(direccion2))
        self.assertFalse(direccion.__eq__(direccion3))

    def test_es_direccion_correcta(self) -> None:
        self.assertFalse(DireccionMac.es_direccion_correcta(""))
        self.assertFalse(DireccionMac.es_direccion_correcta("1F:32:25:1F:G9:8"))
        self.assertFalse(DireccionMac.es_direccion_correcta("1F:32:25:1F:G"))
        self.assertFalse(DireccionMac.es_direccion_correcta("1F:32:25:1F:G9:800"))
        self.assertTrue(DireccionMac.es_direccion_correcta("1F:32:25:1F:G9:90"))





if __name__ == "__main__":
    unittest.main()
    
