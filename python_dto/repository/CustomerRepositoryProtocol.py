from typing import Protocol

from entities.Customer import Customer

class CustomerRepositoryProtocol(Protocol):

    def update_customer(self, customer: Customer) -> None:
        """ Raises exception """
        ...


    def create_customer(self, customer: Customer) -> None:
        """ Raises exception """
        ...

    def retrieve_customers(self) -> list[Customer]:
        ...


    def retrieve_customer_by_personal_id(self, personal_id: str) -> Customer:
        ...

    def deleteCustomer(self, customer: Customer) -> None:
        """ Raises exception """
        ...