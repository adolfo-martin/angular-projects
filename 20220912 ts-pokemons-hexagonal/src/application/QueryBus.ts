import { QueryInterface, QueryHandlerInterface } from './Query.js'

export default class QueryBus {
    private static _bus = new Map<string, QueryHandlerInterface<QueryInterface, any>>()

    public register(query: QueryInterface, queryHandler: QueryHandlerInterface<QueryInterface, any>): void {
        QueryBus._bus.set(query.name, queryHandler)
    }

    public async execute(query: QueryInterface): Promise<any> {
        const handler = QueryBus._bus.get(query.name)
        await handler?.handle(query)
    }
}