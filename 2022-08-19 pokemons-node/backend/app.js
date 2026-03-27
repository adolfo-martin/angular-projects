// npm init -y
// npm install express cors

import PokemonsRepository from './PokemonsRepository.js';
import PokemonsWebserver from './PokemonsWebserver.js';

try {
    const repository = new PokemonsRepository();
    const webserver = new PokemonsWebserver();
    webserver.port = 80
    webserver.repository = repository;
    webserver.listen()
} catch (error) {
    console.error(error)
}