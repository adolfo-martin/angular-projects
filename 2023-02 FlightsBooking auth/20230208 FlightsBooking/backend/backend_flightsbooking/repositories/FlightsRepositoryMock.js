import Flight from '../entities/Flight.js';

export default class FlightsRepositoryMock {
    static _flights = [
        new Flight(372517631, 3725, 1763, 'MAD37CDG171', '10/02/2023 08:45', 185, 18).toObject(),
        new Flight(372585712, 3725, 8571, 'MAD37LHR852', '10/02/2023 16:00', 220, 30).toObject(),
        new Flight(372558743, 3725, 5874, 'MAD37THF583', '10/02/2023 09:15', 290, 35).toObject(),
        new Flight(372517634, 3725, 1763, 'MAD37CDG174', '11/02/2023 12:30', 175, 16).toObject(),
        new Flight(372585715, 3725, 8571, 'MAD37LHR855', '11/02/2023 13:15', 230, 32).toObject(),
        new Flight(372558746, 3725, 5874, 'MAD37THF586', '11/02/2023 22:30', 280, 32).toObject(),
        new Flight(372517637, 3725, 1763, 'MAD37CDG177', '12/02/2023 02:20', 135, 11).toObject(),
        new Flight(372585718, 3725, 8571, 'MAD37LHR858', '12/02/2023 03:15', 200, 22).toObject(),
        new Flight(372558749, 3725, 5874, 'MAD37THF589', '12/02/2023 12:15', 310, 35).toObject(),
        

        new Flight(176337251, 1763, 3725, 'CDG17MAD371', '10/02/2023 08:45', 165, 22).toObject(),
        new Flight(176385712, 1763, 8571, 'CDG17LHR852', '10/02/2023 16:00', 145, 20).toObject(),
        new Flight(176358743, 1763, 5874, 'CDG17THF583', '10/02/2023 09:15', 180, 23).toObject(),
        new Flight(176337254, 1763, 3725, 'CDG17MAD374', '11/02/2023 12:30', 185, 25).toObject(),
        new Flight(176385715, 1763, 8571, 'CDG17LHR855', '11/02/2023 13:15', 140, 18).toObject(),
        new Flight(176358746, 1763, 5874, 'CDG17THF586', '11/02/2023 22:30', 200, 25).toObject(),
        new Flight(176337257, 1763, 3725, 'CDG17MAD377', '12/02/2023 02:20', 155, 20).toObject(),
        new Flight(176385718, 1763, 8571, 'CDG17LHR858', '12/02/2023 03:15', 110, 15).toObject(),
        new Flight(176358749, 1763, 5874, 'CDG17THF589', '12/02/2023 12:15', 240, 30).toObject(),


        new Flight(857137251, 8571, 3725, 'LHR85MAD371', '10/02/2023 08:45', 275, 29).toObject(),
        new Flight(857117632, 8571, 1763, 'LHR85CDG172', '10/02/2023 16:00', 135, 20).toObject(),
        new Flight(857158743, 8571, 5874, 'LHR85THF583', '10/02/2023 09:15', 150, 23).toObject(),
        new Flight(857137254, 8571, 3725, 'LHR85MAD374', '11/02/2023 12:30', 295, 32).toObject(),
        new Flight(857117635, 8571, 1763, 'LHR85CDG175', '11/02/2023 13:15', 130, 18).toObject(),
        new Flight(857158746, 8571, 5874, 'LHR85THF586', '11/02/2023 22:30', 165, 25).toObject(),
        new Flight(857137257, 8571, 3725, 'LHR85MAD377', '12/02/2023 02:20', 255, 24).toObject(),
        new Flight(857117638, 8571, 1763, 'LHR85CDG178', '12/02/2023 03:15', 100, 14).toObject(),
        new Flight(857158749, 8571, 5874, 'LHR85THF589', '12/02/2023 12:15', 215, 35).toObject(),

        new Flight(587437251, 5874, 3725, 'THF58MAD371', '10/02/2023 08:45', 310, 35).toObject(),
        new Flight(587417632, 5874, 1763, 'THF58CDG172', '10/02/2023 16:00', 250, 26).toObject(),
        new Flight(587485713, 5874, 8571, 'THF58LHR853', '10/02/2023 09:15', 285, 18).toObject(),
        new Flight(587437254, 5874, 3725, 'THF58MAD374', '11/02/2023 12:30', 325, 36).toObject(),
        new Flight(587417635, 5874, 1763, 'THF58CDG175', '11/02/2023 13:15', 235, 22).toObject(),
        new Flight(587485716, 5874, 8571, 'THF58LHR856', '11/02/2023 22:30', 305, 22).toObject(),
        new Flight(587437257, 5874, 3725, 'THF58MAD377', '12/02/2023 02:20', 165, 24).toObject(),
        new Flight(587417638, 5874, 1763, 'THF58CDG178', '12/02/2023 03:15', 185, 18).toObject(),
        new Flight(587485719, 5874, 8571, 'THF58LHR859', '12/02/2023 12:15', 325, 25).toObject(),
    ];


    async retrieveFlights() {
        return FlightsRepositoryMock._flights;
    }


    async retrieveFlightByUuid(uuid) {
        return FlightsRepositoryMock._flights.find(flight => flight.uuid === uuid)
    }


    async retrieveFlightsByOriginAirport(airportUuid) {
        return FlightsRepositoryMock._flights.filter(flight => flight.originAirport === airportUuid)
    }


    async retrieveDestinationAirportsByOriginAirport(airportUuid) {
        const flights = await this.retrieveFlightsByOriginAirport(airportUuid);
        const destinationAirports = flights
            .map(flight => flight.destinationAirport)
            .reduce(
                (result, flight) => {
                    if (!result.includes(flight))
                        result.push(flight);
                    return result;
                },
                []
            );
        return destinationAirports;
    }


    async retrieveFlightsByOriginAirportAndDestinationAirport(originAirportUuid, destinationAirportUuid) {
        const isOriginAirport = flight => flight.originAirport === originAirportUuid;
        const isDestinationAirport = flight => flight.destinationAirport === destinationAirportUuid;

        return FlightsRepositoryMock._flights
            .filter(isOriginAirport)
            .filter(isDestinationAirport);
    }
}