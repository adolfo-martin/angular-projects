import Pokemon from '../domain/Pokemon.js';
import PokemonsRepositoryMockAdapter from '../infraestructure/PokemonsRepositoryMockAdapter.js';
import Configuration from './Configuration.js';
import QueryBus from './QueryBus.js';
import RepositoryInterface from './RepositoryInterface.js';

class Application {

    async run(): Promise<void> {
        Configuration.init()
        const service = Configuration.getPokemonsService()
        const pokemons = await service.retrievePokemons()
        console.log(pokemons)

        // const pokemon = new Pokemon(1, 'Pikachu', 15, 45)
        // console.log(pokemon)

        // const repository: RepositoryInterface<Pokemon> = new PokemonsRepositoryMockAdapter()
        // const pokemons = await repository.retrievePokemons()
        // console.log(pokemons)
    }
}

const app = new Application()
app.run()