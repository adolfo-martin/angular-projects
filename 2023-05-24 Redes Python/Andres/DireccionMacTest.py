import unittest
from DireccionMac import DireccionMacError,DireccionMac

class DireccionTest(unittest.TestCase):
    def test_constructor(self) -> None:
        direccion_mac = DireccionMac("11:11:11:11:11:11")
        self.assertIsInstance(direccion_mac, DireccionMac)

        with self.assertRaises(DireccionMacError):
            direccion = DireccionMac("11:11:11:11:11:11:")

        with self.assertRaises(DireccionMacError):
            direccion = DireccionMac("11:11:11:1")

        with self.assertRaises(DireccionMacError):
            direccion = DireccionMac("")

    def test_getters(self) -> None:
        direccion_mac = DireccionMac("11:11:11:11:11:11")
        self.assertEqual(direccion_mac.direccion,"11:11:11:11:11:11")

    def test_setter(self) -> None:
        direccion_mac = DireccionMac("11:11:11:11:11:11")

        direccion_mac.direccion = "11:11:11:11:11:12"

        self.assertEqual(direccion_mac.direccion,"11:11:11:11:11:12")

        with self.assertRaises(DireccionMacError):
            direccion_mac.direccion = "11:11:11:11:11:11:"

        with self.assertRaises(DireccionMacError):
            direccion_mac.direccion = "11:11:11:11"

    def test_eq(self) -> None:
        direccion_mac1 = DireccionMac("11:11:11:11:11:11")
        direccion_mac2 = DireccionMac("11:11:11:11:11:11")
        direccion_mac3 = DireccionMac("11:11:11:11:11:12")

        self.assertTrue(direccion_mac1==direccion_mac2)
        self.assertFalse(direccion_mac1==direccion_mac3)



if __name__ == "__main__":
    direccion_mac = DireccionMac("11:11:11:11:11:11")
    print(direccion_mac)
    print()
    unittest.main()
    