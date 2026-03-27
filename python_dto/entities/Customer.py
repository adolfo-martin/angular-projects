class Customer:
    
    def __init__(self, firstname: str, lastname: str, personal_id, address: str) -> None:
        self.firstname = firstname
        self.lastname = lastname
        self.personal_id = personal_id
        self.address = address


    def __repr__(self) -> str:
        return f"[Customer] {self.lastname}; {self.firstname}; {self.personal_id}; {self.address}"
    