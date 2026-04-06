from dataclasses import dataclass
from domain.entities.Client import Client
from application.common.interfaces import CommandInterface, CommandHandlerInterface

@dataclass
class CreateClientCommand(CommandInterface):
    def __init__(self, client: Client):
        self.client = client

class CreateClientCommandHandler(CommandHandlerInterface):
    pass

    def handle(command: CreateClientCommand):
        pass