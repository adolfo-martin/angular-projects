import Pokemon from "../domain/Pokemon.js";
import PokemonsDatabaseInterface from "../ports/PokemonsDatabaseInterface.js";
import PokemonsDatabaseMock from "../repositories/PokemonsDatabaseMock.js";
import { Pokemon as PokemonType } from "../repositories/PokemonsDatabaseMock.js";

export default class PokemonsDatabaseMockAdapter implements PokemonsDatabaseInterface {
    private static _pokemonsDatabase = PokemonsDatabaseMock.create()

    async retrievePokemons(): Promise<Pokemon[]> {
        const pokemons = PokemonsDatabaseMockAdapter._pokemonsDatabase.selectPokemons()
        return pokemons.map(pokemon => {
            const pokemonO = new Pokemon(pokemon.id, pokemon.name)
            pokemonO.height = pokemon.height
            pokemonO.weight = pokemon.weight
            return pokemonO
        })
    }

    async addPokemon(pokemon: Pokemon): Promise<void> {
        const pokemonT: PokemonType = {
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight
        }
        PokemonsDatabaseMockAdapter._pokemonsDatabase.insertPokemon(pokemonT)
    }

}