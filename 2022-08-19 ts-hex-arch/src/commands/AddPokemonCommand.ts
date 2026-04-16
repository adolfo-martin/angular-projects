import Pokemon from "../domain/Pokemon.js";
import PokemonsDatabaseInterface from "../ports/PokemonsDatabaseInterface.js";
import CommandInterface from "./CommandInteface.js";

export default class AddPokemonCommand implements CommandInterface {

    constructor(private _pokemonsDatabase: PokemonsDatabaseInterface) { }

    async execute(payload: any): Promise<void> {
        const pokemon: Pokemon = payload as Pokemon
        const pokemons = await this._pokemonsDatabase.addPokemon(pokemon)
    }
}