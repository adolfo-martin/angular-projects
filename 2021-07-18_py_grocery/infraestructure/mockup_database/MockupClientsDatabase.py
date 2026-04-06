from domain.value_objects.TaxIdentifier import TaxIdentifier
from infraestructure.services.UuidService import UuidService
from domain.entities.Client import Client
from typing import Dict
from functools import reduce

class MockupClientsDatabase:
    def __init__(self):
        self._clients: Dict[str, Client] = {}

        uuid = UuidService.generate_uuid()
        client1 = Client(uuid, 'Pepe Lopez')
        client1.tax_id = TaxIdentifier('23000001A')
        self._clients[uuid] = client1

        uuid = UuidService.generate_uuid()
        client2 = Client(uuid, 'Maria Martinez')
        client2.tax_id = TaxIdentifier('23000002B')
        self._clients[uuid] = client2

    def __repr__(self):
        result = reduce(lambda acc, client: acc + '\n    ' + str(client), self._clients.values(), '')
        return f'[{result}\n]'
