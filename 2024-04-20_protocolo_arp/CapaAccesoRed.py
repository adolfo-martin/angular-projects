from __future__ import annotations
from DireccionIp import DireccionIp
from DireccionMac import DireccionMac
from typing import Protocol

class EquipoP(Protocol):
    def establecer_capa_acceso_red(self, capa: CapaAccesoRed): ...
    def enviar(self, direccion_mac_destino: DireccionMac, mensaje: str): ...
    def recibir(self, direccion_mac_origen: DireccionMac, mensaje: str): ...


class CapaAccesoRed:

    def __init__(self) -> None:
        self.equipos_conectados: list[EquipoP] = []


    def conectar(self, equipo: EquipoP):
        self.equipos_conectados.append(equipo)


    def enviar(self, direccion_mac_origen: DireccionMac, direccion_mac_destino: DireccionMac, mensaje: str): 
        for equipo in self.equipos_conectados:
            if equipo.direccion_mac == direccion_mac_origen:
                continue

            respuesta = equipo.recibir(direccion_mac_origen, direccion_mac_destino, mensaje)
            if respuesta is not None:
                equipo.enviar(direccion_mac_origen, respuesta)


    
    # def enviar(self, direccion_mac_origen: DireccionMac, direccion_mac_destino: DireccionMac, mensaje: str):
    #     ...

    # def averiguar_direccion_mac_por_difusion_amplia(self, direccion_mac_origen: DireccionMac, direccion_ip_investigada: DireccionIp) -> DireccionMac:
    #     mensaje = f"mac_origen={direccion_mac_origen},ip_investigada={direccion_ip_investigada}"
    #     for equipo in self.equipos_conectados:
    #         equipo.recibir(DireccionMac.DIRECCION_MAC_BROADCAST, mensaje)