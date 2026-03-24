import pickle
from MedioFisico import MedioFisico
from Trama import Trama


class CapaAccesoRed:

    def __init__(self, medio_fisico: MedioFisico) -> None:
        self.medio_fisico = medio_fisico


    def enviar_datos(self, ip_origen: str, ip_destino: str, datos: bytes):
        mac_origen = MedioFisico.obtener_mac_de_ip(ip_origen)
        mac_destino = MedioFisico.obtener_mac_de_ip(ip_destino)
        trama = Trama(mac_origen, mac_destino, datos)
        trama_serializada = CapaAccesoRed.serializar(trama)
        self.medio_fisico.enviar_datos(trama_serializada)


    def serializar(elemento: object) -> bytes:
        return pickle.dumps(elemento)
    

    def deserializar(elemento: bytes) -> object:
        return pickle.loads(elemento)

