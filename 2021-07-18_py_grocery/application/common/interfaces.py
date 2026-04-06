from dataclasses import dataclass


@dataclass
class CommandInterface:
    def __init__(self, class_name: str):
        self.class_name = class_name


class CommandHandlerInterface:
    def handle(command: CommandInterface) -> None:
        pass