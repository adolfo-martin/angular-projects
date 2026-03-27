import Pokemon from "../domain/Pokemon.js";
import PokemonsDatabaseInterface from "../ports/PokemonsDatabaseInterface.js";
import QueryInterface from "./QueryInteface.js";

export default class RetrievePokemonsQuery implements QueryInterface {

    constructor(private _pokemonsDatabase: PokemonsDatabaseInterface) { }

    async execute(): Promise<Pokemon[]> {
        const pokemons = await this._pokemonsDatabase.retrievePokemons()
        return pokemons
    }
}