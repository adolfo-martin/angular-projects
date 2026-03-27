import Pokemon from "../domain/Pokemon.js";

export default interface PokemonsDatabaseInterface {
    retrievePokemons(): Promise<Pokemon[]>
    addPokemon(pokemon: Pokemon): Promise<void>
}