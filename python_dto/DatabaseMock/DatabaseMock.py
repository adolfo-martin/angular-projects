class DatabaseMock:

    def __init__(self) -> None:
        self.customers = [
            { "firstname": "Adolfo", "lastname": "Martin", "personal_id": "23.232.323-A", "address": "c/ Perez Casas 1 1A"},
            { "firstname": "Juan Antonio", "lastname": "Cuello", "personal_id": "23.232.324-B", "address": "c/ Perez Casas 2 2B"},
            { "firstname": "Diego Enrique", "lastname": "Heredia", "personal_id": "23.232.325-C", "address": "c/ Perez Casas 3 3C"},
            { "firstname": "Josefa", "lastname": "Almagro", "personal_id": "23.232.326-D", "address": "c/ Perez Casas 4 4D"},
        ]