export interface QueryInterface {
    readonly name: string
}

export abstract class QueryAbstract implements QueryInterface {
    protected constructor(private _name: string, private _payload: any) {}

    public get name() {
        return this._name
    }
}

export interface QueryHandlerInterface<Query extends QueryInterface, ReturnType> {
    handle(query: Query): Promise<ReturnType>
}