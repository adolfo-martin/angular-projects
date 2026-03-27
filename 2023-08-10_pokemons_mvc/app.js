import PokemonsRepository from './pokemons/PokemonsRepository.js';
import PokemonsService from './pokemons/PokemonsService.js';
import PokemonsRestServer from './pokemons/PokemonsRestServer.js';

// const pokemonsRepository = new PokemonsRepository();
// const pokemons = await pokemonsRepository.getPokemons();
// console.log(pokemons);
// const pokemon = await pokemonsRepository.getPokemonById(1);
// console.log(pokemon);

const pokemonsRepository = new PokemonsRepository();
const pokemonsService = new PokemonsService(pokemonsRepository);
const PORT = 3000;
const pokemonsRestServer = new PokemonsRestServer(PORT, pokemonsService);
pokemonsRestServer.listen();