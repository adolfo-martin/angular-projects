from CapaAccesoRed import CapaAccesoRed
from MedioFisico import MedioFisico


class App:
    
    def simular_comunicacion(self):
        medio_fisico = MedioFisico()
        capa_acceso_red = CapaAccesoRed(medio_fisico)
        capa_acceso_red.enviar_datos('192.168.1.2', '192.168.1.3', 0b11111111)



if __name__ == '__main__':
    app = App()
    app.simular_comunicacion()