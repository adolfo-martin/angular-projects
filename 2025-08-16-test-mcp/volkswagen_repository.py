#!/usr/bin/env python3
"""
Volkswagen Cars Repository
Contains information about Volkswagen vehicles with methods to retrieve car data.
"""

class VolkswagenRepository:
    """Repository class for managing Volkswagen car data."""
    
    def __init__(self):
        """Initialize the repository with Volkswagen car data."""
        self.cars = [
            {
                "id": 1,
                "model": "Golf",
                "year": 2024,
                "type": "Hatchback",
                "engine": "2.0L TSI",
                "fuel_type": "Gasoline",
                "price": 25000,
                "color": "Tornado Red"
            },
            {
                "id": 2,
                "model": "Jetta",
                "year": 2024,
                "type": "Sedan",
                "engine": "1.4L TSI",
                "fuel_type": "Gasoline",
                "price": 22000,
                "color": "Pure White"
            },
            {
                "id": 3,
                "model": "Passat",
                "year": 2023,
                "type": "Sedan",
                "engine": "2.0L TSI",
                "fuel_type": "Gasoline",
                "price": 32000,
                "color": "Deep Black Pearl"
            },
            {
                "id": 4,
                "model": "Tiguan",
                "year": 2024,
                "type": "SUV",
                "engine": "2.0L TSI",
                "fuel_type": "Gasoline",
                "price": 35000,
                "color": "Atlantic Blue"
            },
            {
                "id": 5,
                "model": "Atlas",
                "year": 2024,
                "type": "SUV",
                "engine": "3.6L V6",
                "fuel_type": "Gasoline",
                "price": 42000,
                "color": "Platinum Gray"
            },
            {
                "id": 6,
                "model": "ID.4",
                "year": 2024,
                "type": "Electric SUV",
                "engine": "Electric Motor",
                "fuel_type": "Electric",
                "price": 38000,
                "color": "Glacier White"
            },
            {
                "id": 7,
                "model": "Arteon",
                "year": 2023,
                "type": "Sedan",
                "engine": "2.0L TSI",
                "fuel_type": "Gasoline",
                "price": 45000,
                "color": "Manganese Gray"
            },
            {
                "id": 8,
                "model": "Taos",
                "year": 2024,
                "type": "Compact SUV",
                "engine": "1.5L TSI",
                "fuel_type": "Gasoline",
                "price": 28000,
                "color": "Kings Red"
            },
            {
                "id": 9,
                "model": "Beetle",
                "year": 2019,
                "type": "Coupe",
                "engine": "2.0L TSI",
                "fuel_type": "Gasoline",
                "price": 24000,
                "color": "Fresh Fuchsia"
            },
            {
                "id": 10,
                "model": "ID.Buzz",
                "year": 2024,
                "type": "Electric Van",
                "engine": "Electric Motor",
                "fuel_type": "Electric",
                "price": 65000,
                "color": "Candy White"
            }
        ]
    
    def get_all_cars(self):
        """
        Returns all Volkswagen cars in the repository.
        
        Returns:
            list: A list of dictionaries containing car information
        """
        return self.cars
    
    def get_car_by_id(self, car_id):
        """
        Returns a specific car by its ID.
        
        Args:
            car_id (int): The ID of the car to retrieve
            
        Returns:
            dict or None: Car information dictionary if found, None otherwise
        """
        for car in self.cars:
            if car["id"] == car_id:
                return car
        return None
    
    def display_car_info(self, car):
        """
        Helper method to display car information in a formatted way.
        
        Args:
            car (dict): Car information dictionary
        """
        if car:
            print(f"ID: {car['id']}")
            print(f"Model: {car['model']}")
            print(f"Year: {car['year']}")
            print(f"Type: {car['type']}")
            print(f"Engine: {car['engine']}")
            print(f"Fuel Type: {car['fuel_type']}")
            print(f"Price: ${car['price']:,}")
            print(f"Color: {car['color']}")
            print("-" * 30)
        else:
            print("Car not found!")


# Example usage
if __name__ == "__main__":
    # Create repository instance
    vw_repo = VolkswagenRepository()
    
    print("=== All Volkswagen Cars ===")
    all_cars = vw_repo.get_all_cars()
    for car in all_cars:
        vw_repo.display_car_info(car)
    
    print("\n=== Searching for specific car (ID: 5) ===")
    specific_car = vw_repo.get_car_by_id(5)
    vw_repo.display_car_info(specific_car)
    
    print("\n=== Searching for non-existent car (ID: 99) ===")
    missing_car = vw_repo.get_car_by_id(99)
    vw_repo.display_car_info(missing_car)
