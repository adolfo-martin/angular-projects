from dataclasses import dataclass


@dataclass(init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False)
class TaxIdentifier:
    def __init__(self, tax_id: str):
        self.tax_id = tax_id

    def __repr__(self):
        return f'{self.tax_id!r}'