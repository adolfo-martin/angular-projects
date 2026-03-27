import AirportsRepositoryMock from './backend_flightsbooking/repositories/AirportsRepositoryMock.js';
import FlightsRepositoryMock from './backend_flightsbooking/repositories/FlightsRepositoryMock.js';
import FlightsBookingServer from './backend_flightsbooking/servers/FlightsBookingServer.js';

import AuthenticationServer from './backend_authentication/AuthenticationServer.js';
import UsersRepository from './backend_authentication/UsersRepository.js';


const airportsRepository = new AirportsRepositoryMock();
const flightsRepository = new FlightsRepositoryMock();

const flightsServer = new FlightsBookingServer(airportsRepository, flightsRepository, 3001);
flightsServer.listen();

const repository = new UsersRepository();
const authenticationServer = new AuthenticationServer(3002, repository);
authenticationServer.listen();