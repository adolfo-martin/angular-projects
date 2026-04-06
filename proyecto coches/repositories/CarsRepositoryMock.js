import Car from '../entities/Car.js';

export default class CarsRepositoryMock {
    static _cars = [];

    createCar(uuid, model, brand) {
        const car = new Car(uuid, model, brand);
        CarsRepositoryMock._cars.push(car);
    }

    retrieveCars() {
        return CarsRepositoryMock._cars;
    }
}

// interface CarsRepositoryInterface {
//     retrieveCars();
//     retrieveCarByUuid();
//     createCar(uuid, model, brand);
// }