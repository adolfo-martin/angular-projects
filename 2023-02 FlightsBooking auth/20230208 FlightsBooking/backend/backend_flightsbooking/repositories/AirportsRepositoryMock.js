import Airport from '../entities/Airport.js';

export default class AirportsRepositoryMock {
    static _airport = [
        new Airport(3725, 'Madrid-Barajas', 'Aeropuerto Adolfo Suárez Madrid-Barajas', 'MAD').toObject(),
        new Airport(8571, 'Londres-Heathrow', 'Aeropuerto de Londres-Heathrow', 'LHR').toObject(),
        new Airport(1763, 'París-Charles de Gaulle', 'Aeropuerto Charles de Gaulle de París', 'CDG').toObject(),
        new Airport(5874, 'Berlín-Tempelhof', 'Aeropuerto de Berlín-Tempelhof', 'THF').toObject(),
    ];


    async retrieveAirports() {
        if (AirportsRepositoryMock._isThereTechnicalProblem()) {
            throw 'Cannot retrieve airports';
        }

        return AirportsRepositoryMock._airport;
    }


    async retrieveAirportByUuid(uuid) {
        return AirportsRepositoryMock._airport.find(airport => airport.uuid === uuid)
    }


    static _isThereTechnicalProblem() {
        return Math.random() < 0.5 ? true : false;
    }
}