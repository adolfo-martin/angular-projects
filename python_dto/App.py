from DatabaseMock.DatabaseMockAdapter import DatabaseMockAdapter
from entities.Customer import Customer
from repository.CustomerRepositoryProtocol import CustomerRepositoryProtocol


class App:

    def __init__(self, customer_repository: CustomerRepositoryProtocol) -> None:
        self.__customer_repository = customer_repository

    def run(self):
        print(self.__customer_repository.retrieve_customers())
       

if __name__ == "__main__":  
    app = App(DatabaseMockAdapter())
    app.run()