import uuid

class UuidService:
    @staticmethod
    def generate_uuid() -> str:
        random_uuid = uuid.uuid4()
        return str(random_uuid)