import Pokemon from "../models/Pokemon.js";

export default interface PokemonServiceInterface {
    getPokemons(): Pokemon[];
    getPokemonById(id: number): Pokemon | undefined;
    addPokemon(pokemon: Pokemon): void;
    updatePokemon(pokemon: Pokemon): void;
    deletePokemon(pokemon: Pokemon): void;
}