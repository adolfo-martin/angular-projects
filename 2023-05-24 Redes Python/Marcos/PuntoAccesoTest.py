import unittest
from DireccionMac import DireccionMac
from PuntoAcceso import PuntoAcceso, PuntoAccesoError, TipoLista

class TestPuntoAcceso(unittest.TestCase):
    def test_init_PuntoAcceso(self):
      punto_acceso=PuntoAcceso()
      self.assertIsInstance(punto_acceso, PuntoAcceso) 

    def test_getter_lista_activa(self):
       punto_acceso=PuntoAcceso()
       
       tipo_lista=TipoLista.NINGUNA
       self.assertEqual(punto_acceso.lista_activa, tipo_lista)

    
    def test_conectar_equipo(self):
        punto_acceso=PuntoAcceso()
        direccion_mac=DireccionMac("22:22:22:22:22:22")
        punto_acceso.conectar_equipo(direccion_mac)
        direccion_mac_lista:DireccionMac=punto_acceso.equipos_conectados[0]
        self.assertEqual(direccion_mac_lista, direccion_mac)
        
        


    # def test_añadir_direccion_a_lista():
    #     punto_acceso=PuntoAcceso()
    #     direccion_mac=DireccionMac("22:22:22:22:22:22")
    #     tipo_lista=TipoLista.LISTA_BLANCA
    #     punto_acceso.añadir_direccion_a_lista(direccion_mac, tipo_lista)
        
       
        











    # def test_getter_lista_blanca(self):
    #    punto_acceso=PuntoAcceso()

    #    lista_blanca=list [DireccionMac]
    #    direccion=DireccionMac("22:22:22:22:22:22")
    #    lista_blanca.append(direccion)
       
    #    self.assertListEqual(punto_acceso.lista_blanca, lista_blanca[direccion])

    # def test_getter_lista_negra(self):
    #    punto_acceso=PuntoAcceso()
       
       
    #    tipo_lista=TipoLista.LISTA_NEGRA
    #    self.assertEqual(punto_acceso.lista_negra, tipo_lista)
       

    



    

if __name__ == "__main__":
    unittest.main()