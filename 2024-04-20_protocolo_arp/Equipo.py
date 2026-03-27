from DireccionIp import DireccionIp
from DireccionMac import DireccionMac
from typing import Protocol


class CapaAccesoRedP(Protocol):
    def conectar(self, Equipo): ...
    def enviar(self, direccion_mac_origen: DireccionMac, direccion_mac_destino: DireccionMac, mensaje: str): ...


class Equipo:

    def __init__(self, direccion_mac: DireccionMac, direccion_ip: DireccionIp) -> None:
        self.direccion_mac = direccion_mac
        self.direccion_ip = direccion_ip
        self.direcciones_arp: dict[DireccionIp, DireccionMac] = {}


    def conectar_a_capa_acceso_red(self, capa: CapaAccesoRedP):
        self.capa_acceso_red = capa
        self.capa_acceso_red.conectar(self)


    def enviar(self, direccion_ip_destino: DireccionIp, mensaje: str):
        direccion_mac_destino = self.obtener_direccion_mac_from_arp(direccion_ip_destino)
        if direccion_mac_destino is None:
            raise DestinoInalcanzableError()

        self.capa_acceso_red.enviar(direccion_mac_destino, mensaje)

        
    def recibir(self, direccion_mac_origen: DireccionMac, direccion_mac_destino: DireccionMac, mensaje: str): 
        if direccion_mac_destino == DireccionMac.DIRECCION_MAC_BROADCAST:
            mac_origen_mensaje = mensaje.split(',')[0].split('=')[1]
            ip_investigada = mensaje.split(',')[1].split('=')[1]
            if ip_investigada == self.direccion_ip:
                # self.capa_acceso_red.enviar(self.direccion_mac, mac_origen_mensaje, f'mac_investigada={self.direccion_mac}')
                return f'mac_investigada={self.direccion_mac}'
            else:
                return            
        elif direccion_mac_destino == self.direccion_mac:
            print(f'He recibido el mensaje: {mensaje}')

    
    def obtener_direccion_mac_from_arp(self, direccion_ip: DireccionIp) -> DireccionMac | None:
        direccion_mac = self.direcciones_arp.get(direccion_ip)
        if direccion_mac is None:
            mensaje = f"mac_origen={self.direccion_mac},ip_investigada={direccion_ip}"
            datos = self.capa_acceso_red.enviar(self.direccion_mac, DireccionMac.DIRECCION_MAC_BROADCAST, mensaje)
            if not datos is None:
                direccion_mac = datos.split('=')[1]
        return None if direccion_mac is None else direccion_mac


class DestinoInalcanzableError(Exception): ...