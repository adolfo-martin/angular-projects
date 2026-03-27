import Pokemon from "../models/Pokemon.js";
import PokemonServiceInterface from "./PokemonsServiceInterface.js";

export default class PokemonsServiceArrayMock implements PokemonServiceInterface {
    private static pokemons: Pokemon[];

    constructor() {
        if (!PokemonsServiceArrayMock.pokemons) {
            PokemonsServiceArrayMock.pokemons = [
                new Pokemon(1, "Bulbasaur"),
                new Pokemon(2, "Ivysaur"),
                new Pokemon(3, "Venusaur"),
                new Pokemon(4, "Charmander"),
                new Pokemon(5, "Charmeleon"),
                new Pokemon(6, "Charizard"),
                new Pokemon(7, "Squirtle"),
                new Pokemon(8, "Wartortle"),
                new Pokemon(9, "Blastoise"),
                new Pokemon(10, "Caterpie"),
                new Pokemon(11, "Metapod"),
                new Pokemon(12, "Butterfree"),
                new Pokemon(13, "Weedle"),
                new Pokemon(14, "Kakuna"),
                new Pokemon(15, "Beedrill"),
                new Pokemon(16, "Pidgey"),
                new Pokemon(17, "Pidgeotto"),
                new Pokemon(18, "Pidgeot"),
            ];
        }
    }

    getPokemons(): Pokemon[] {
        return PokemonsServiceArrayMock.pokemons;
    }
    getPokemonById(id: number): Pokemon | undefined {
        throw new Error("Method not implemented.");
    }
    addPokemon(pokemon: Pokemon): void {
        throw new Error("Method not implemented.");
    }
    updatePokemon(pokemon: Pokemon): void {
        throw new Error("Method not implemented.");
    }
    deletePokemon(pokemon: Pokemon): void {
        throw new Error("Method not implemented.");
    }
}