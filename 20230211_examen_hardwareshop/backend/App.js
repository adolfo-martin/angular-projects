import HardwareshopMariadbRepository from './repositories/HardwareshopMariadbRepository.js';
import HardwareshopRestServer from './restservers/HardwareshopRestServer.js';

const repository = new HardwareshopMariadbRepository();
const server = new HardwareshopRestServer(8082, repository);
server.listen();