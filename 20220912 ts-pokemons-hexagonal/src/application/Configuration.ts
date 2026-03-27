import PokemonsService from './PokemonsService.js';
import QueryBus from './QueryBus.js';
import { RetrievePokemonsQuery, RetrievePokemonsQueryHandler } from './RetrievePokemonsQuery.js';

export default class Configuration {
    private static _queryBus: QueryBus
    private static _pokemonsService: PokemonsService

    public static init(): void {
        Configuration._queryBus = new QueryBus()

        const query = new RetrievePokemonsQuery()
        const queryHandler = new RetrievePokemonsQueryHandler()
        Configuration._queryBus.register(query, queryHandler)

        Configuration._pokemonsService = PokemonsService.create(Configuration._queryBus)
    }

    public static getQueryBus(): QueryBus {
        return Configuration._queryBus
    }

    public static getPokemonsService(): PokemonsService {
        return Configuration._pokemonsService
    }
}