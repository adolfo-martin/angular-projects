import Pokemon from '../domain/Pokemon.js';
import PokemonsRepositoryMockAdapter from '../infraestructure/PokemonsRepositoryMockAdapter.js';
import { QueryAbstract, QueryHandlerInterface } from './Query.js';

export class RetrievePokemonsQuery extends QueryAbstract {
    constructor() {
        super('RETRIEVE_POKEMONS_COMMAND', undefined)
    } 
}

export class RetrievePokemonsQueryHandler implements QueryHandlerInterface<RetrievePokemonsQuery, Array<Pokemon>> {
    async handle(query: RetrievePokemonsQuery): Promise<Array<Pokemon>> {
        const repository = new PokemonsRepositoryMockAdapter()
        const pokemons = await repository.retrievePokemons()
        return pokemons
    }
}