abstract class Car {
    public description!: string

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number
}


class ModelS extends Car {
    public description = 'Model S'

    public cost(): number {
        return 73000
    }
}


class ModelX extends Car {
    public description = 'Model X'

    public cost(): number {
        return 82000
    }
}


abstract class CarOptions extends Car {
    decoratorCar!: Car
    public abstract getDescription(): string;
    public abstract cost(): number
}


class EnhancedAutoPilot extends CarOptions {
    constructor(car: Car) {
        super()
        this.decoratorCar = car
    }

    public cost(): number {
        return this.decoratorCar.cost() + 5000
    }

    public getDescription(): string {
        return this.decoratorCar.getDescription() + ', enhanced autopilot'
    }
}


class RearFacingSeats extends CarOptions {
    constructor(car: Car) {
        super()
        this.decoratorCar = car
    }

    public cost(): number {
        return this.decoratorCar.cost() + 4000
    }

    public getDescription(): string {
        return this.decoratorCar.getDescription() + ', rear facing seats'
    }
}

let myTesla = new ModelS()
myTesla = new RearFacingSeats(myTesla)
myTesla = new EnhancedAutoPilot(myTesla)

console.log(myTesla.getDescription())
console.log(myTesla.cost())