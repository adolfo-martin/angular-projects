from dataclasses import dataclass
from domain.value_objects.TaxIdentifier import TaxIdentifier
import uuid

@dataclass
class Client:
    uuid: str
    name: str
    tax_id: TaxIdentifier

    def __init__(self, uuid: str, name: str):
        self.uuid = uuid
        self.name = name

    # def __repr__(self):
    #     return f'<{self.uuid} * {self.name}>'