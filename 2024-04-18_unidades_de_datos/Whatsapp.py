import pickle
from Mensaje import Mensaje
from CapaTransporte import CapaTransporte

class Whatsapp:

    SERVIDOR_SALIDA_WHATSAPP = 'outcoming.whatsapp.com'
    PUERTO_SALIDA_WHATSAPP = 2794


    def __init__(self, capa_transporte: CapaTransporte) -> None:
        self.capa_transporte = capa_transporte


    def enviar_mensaje(self, mensaje: Mensaje):
        mensaje_serializado = Whatsapp.serializar(mensaje)
        self.capa_transporte.enviar_datos(direccion_origen, puerto_origen, direccion_destino, puerto_destino, )


    def serializar(elemento: object) -> bytes:
        return pickle.dumps(elemento)
    

    def deserializar(elemento: bytes) -> object:
        return pickle.loads(elemento)
        