from Trama import Trama


class PuntoAcceso:

    def __init__(self, direccion_fisica: str, ssid: str, contraseña: str) -> None:
        self.direccion_fisica = direccion_fisica
        self.ssid = ssid
        self.contraseña = contraseña
        self.equipos_conectados: list[str] = []
    

    def recibir(self, trama: Trama):
        if trama.direccion_destino != self.direccion_fisica:
            return

        if not trama.direccion_origen in self.equipos_conectados:
            self.comprobar_y_realizar_conexion(trama)
        else:
            ...


    def comprobar_y_realizar_conexion(self, trama: Trama):
            partes = str(trama.datos).split(';')
            
            if partes[0].split('=')[0] == 'tipo' and partes[0].split('=')[1] == 'conectar':
                if partes[1].split('=')[1] == self.ssid and partes[2].split('=')[1] == self.contraseña:
                    self.conectarEquipo(trama.direccion_origen)


    def conectarEquipo(self, direccion: str):
        self.equipos_conectados.append(direccion)