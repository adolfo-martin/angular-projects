import RepositoryInterface from '../application/RepositoryInterface.js';
import Pokemon from '../domain/Pokemon.js';
import PokemonsRepositoryMock from '../repositories/PokemonsRepositoryMock.js';

export default class PokemonsRepositoryMockAdapter implements RepositoryInterface<Pokemon> {
    async retrievePokemons(): Promise<Pokemon[]> {
        const repository = PokemonsRepositoryMock.create()
        const pokemonsAsMap = repository.getAllPokemons()
        const pokemonsAsArray = Array.from(pokemonsAsMap.values()).map(pokemon => new Pokemon(pokemon.id, pokemon.name, pokemon.weight, pokemon.height))
        return pokemonsAsArray
    }

    retrievePokemonById(pokemonId: number): Promise<Pokemon> {
        throw new Error('Method not implemented.');
    }
}