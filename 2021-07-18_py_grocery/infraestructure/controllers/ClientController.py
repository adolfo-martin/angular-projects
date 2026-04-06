from typing import List
from domain.entities.Client import Client
from application.clients.commands.CreateClientCommand import CreateClientCommand

class UserController:
    def __init__(self, command_bus, query_bus):
        self.command_bus = command_bus
        self.query_bus = query_bus

    def getAllClients(self) -> List(Client):
        pass

    def getClientByTaxId(self, tax_id: str) -> Client:
        pass

    def createClient(self, name: str, tax_id: str) -> None:
        command = CreateClientCommand(name, tax_id)
        self.command_bus.execute(command)
