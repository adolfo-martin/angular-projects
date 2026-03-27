from DatabaseMock.DatabaseMock import DatabaseMock
from entities.Customer import Customer
from repository.CustomerRepositoryProtocol import CustomerRepositoryProtocol


class DatabaseMockAdapter():
    def __init__(self) -> None:
        database = DatabaseMock()
        self.__customers = database.customers


    def update_customer(self, customer: Customer) -> None:
        """ Raises exception """
        ...


    def create_customer(self, customer: Customer) -> None:
        """ Raises exception """
        ...

    def retrieve_customers(self) -> list[Customer]:
        # customers: list[Customer] = []
        customers = [ Customer(customer["firstname"], customer["lastname"], customer["personal_id"], customer["address"]) for customer in self.__customers ]
        return customers


    def retrieve_customer_by_personal_id(self, personal_id: str) -> Customer:
        ...

    def deleteCustomer(self, customer: Customer) -> None:
        """ Raises exception """
        ...