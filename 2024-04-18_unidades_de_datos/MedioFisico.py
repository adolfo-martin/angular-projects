from Trama import Trama
import pickle

class MedioFisico:

    def obtener_mac_de_ip(direccion_ip: str) -> str:
        match direccion_ip:
            case '192.168.1.2':
                return 'AA:AA:AA:AA:AA:02'
            case '192.168.1.3':
                return 'AA:AA:AA:AA:AA:03'


    def enviar_datos(self, datos: bytes):
        trama: Trama = pickle.loads(datos)

        print(trama)