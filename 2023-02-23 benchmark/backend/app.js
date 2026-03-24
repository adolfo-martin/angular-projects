import BenchmarkRepositoryMock from './backend_benchmark/repositories/BenchmarkRepositoryMock.js';
import BenchmarkRestServer from './backend_benchmark/restservers/BenchmarkRestServer.js';

import AuthenticationServer from './backend_authentication/AuthenticationServer.js';
import UsersRepository from './backend_authentication/UsersRepository.js';

const repository = new UsersRepository();
const authenticationServer = new AuthenticationServer(15397, repository);
authenticationServer.listen();

const benchmarkRepository = new BenchmarkRepositoryMock();
const benchmarkServer = new BenchmarkRestServer(benchmarkRepository, 48711);
benchmarkServer.listen();