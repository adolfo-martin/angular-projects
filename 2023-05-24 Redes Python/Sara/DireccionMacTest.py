import unittest

from DireccionMac import DireccionMac, DireccionMacError

class DireccionMacTest(unittest.TestCase, DireccionMac):
    
    def test_constructor(self) -> None:
        d1 = DireccionMac('11:11:11:11:11:11')
        d2 = DireccionMac('11:11:11')

        self.assertTrue(d1)
        self.assertFalse(d2)

        with self.assertRaises(DireccionMacError):
            self.assertFalse(d2)

if __name__ == "__main__":
    unittest.main()