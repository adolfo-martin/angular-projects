import TravelsRepositoryMock from './backend_travelsbooking/repositories/TravelsRepositoryMock.js';
import TravelsBookingServer from './backend_travelsbooking/servers/TravelsBookingServer.js';

import AuthenticationServer from './backend_authentication/AuthenticationServer.js';
import UsersRepository from './backend_authentication/UsersRepository.js';

// const repository = new UsersRepository();
// const authenticationServer = new AuthenticationServer(3001, repository);
// authenticationServer.listen();

const travelsRepository = new TravelsRepositoryMock();
const travelsServer = new TravelsBookingServer(travelsRepository, 3002);
travelsServer.listen();