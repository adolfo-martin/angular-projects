#!/usr/bin/python3

sockets: list = [
    { 'id': 's01', 'nombre': 'AM4', 'plataforma': 'AMD' },
    { 'id': 's02', 'nombre': '1200', 'plataforma': 'Intel' },
    { 'id': 's03', 'nombre': '1700', 'plataforma': 'Intel' },
]

chipsets: list[dict[str, str, str]] = [
    { 'id': 'p01', 'nombre': 'A320', 'plataforma': 'AMD', 'gama': 'baja', 'socket': 's1' },
    { 'id': 'p02', 'nombre': 'A520', 'plataforma': 'AMD', 'gama': 'baja', 'socket': 's1' },
    { 'id': 'p03', 'nombre': 'B350', 'plataforma': 'AMD', 'gama': 'media', 'socket': 's1' },
    { 'id': 'p04', 'nombre': 'B450', 'plataforma': 'AMD', 'gama': 'media', 'socket': 's1' },
    { 'id': 'p05', 'nombre': 'B550', 'plataforma': 'AMD', 'gama': 'media', 'socket': 's1' },
    { 'id': 'p06', 'nombre': 'X370', 'plataforma': 'AMD', 'gama': 'alta', 'socket': 's1' },
    { 'id': 'p07', 'nombre': 'X470', 'plataforma': 'AMD', 'gama': 'alta', 'socket': 's1' },
    { 'id': 'p08', 'nombre': 'X570', 'plataforma': 'AMD', 'gama': 'alta', 'socket': 's1' },
    { 'id': 'p09', 'nombre': 'H510', 'plataforma': 'Intel', 'gama': 'baja', 'socket': 's2' },
    { 'id': 'p10', 'nombre': 'B560', 'plataforma': 'Intel', 'gama': 'media', 'socket': 's2' },
    { 'id': 'p11', 'nombre': 'B660', 'plataforma': 'Intel', 'gama': 'media', 'socket': 's3' },
    { 'id': 'p12', 'nombre': 'Z590', 'plataforma': 'Intel', 'gama': 'alta', 'socket': 's2' },
    { 'id': 'p13', 'nombre': 'Z690', 'plataforma': 'Intel', 'gama': 'alta', 'socket': 's3' },

]