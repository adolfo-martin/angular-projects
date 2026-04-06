import CarsRepositoryMock from './repositories/CarsRepositoryMock.js';
import CarsServer from './servers/CarsServer.js';

const PORT = 3000;

const repository = new CarsRepositoryMock();
const server = new CarsServer(repository, PORT);
server.run();