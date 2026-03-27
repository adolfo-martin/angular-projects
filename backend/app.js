import VideoStreamRepositoryMock from './backend_videoclubstream/repositories/VideoStreamRepositoryMock.js';
import VideoStreamRestServer from './backend_videoclubstream/restservers/VideoStreamRestServer.js';

import AuthenticationServer from './backend_authentication/AuthenticationServer.js';
import UsersRepository from './backend_authentication/UsersRepository.js';


const videoclubRepository = new VideoStreamRepositoryMock();

const flightsServer = new VideoStreamRestServer(videoclubRepository, 3001);
flightsServer.listen();

const repository = new UsersRepository();
const authenticationServer = new AuthenticationServer(3002, repository);
authenticationServer.listen();