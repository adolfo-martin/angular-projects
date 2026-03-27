import Pokemon from "../domain/Pokemon.js";
import QueryBus from "./QueryBus.js";
import { RetrievePokemonsQuery } from "./RetrievePokemonsQuery.js";

export default class PokemonsService {
    private static _service: PokemonsService
    private static _queryBus: QueryBus

    private constructor() {}

    public static create(queryBus: QueryBus): PokemonsService {
        if (!PokemonsService._service) {
            PokemonsService._service = new PokemonsService()
            PokemonsService._queryBus = queryBus
        }
        return PokemonsService._service
    }

    public async retrievePokemons(): Promise<Array<Pokemon>> {
        const query = new RetrievePokemonsQuery()
        const pokemons = await PokemonsService._queryBus.execute(query) 
        return pokemons
    }
}