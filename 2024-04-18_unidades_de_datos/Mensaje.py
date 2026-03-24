class Mensaje:

    def __init__(self, usuario_origen: str, usuario_destino: str, hora_envio: str, mensaje: str) -> None:
        self.usuario_origen = usuario_origen
        self.usuario_destino = usuario_destino
        self.hora_envio = hora_envio
        self.mensaje = mensaje


    def __repr__(self) -> str:
        return f'[Mensaje] ({self.usuario_origen}) ({self.usuario_destino}) ({self.hora_envio}) ({self.mensaje})'