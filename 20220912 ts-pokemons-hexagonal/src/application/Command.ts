export interface CommandInterface {
    name: string
}

export abstract class CommandAbstract implements CommandInterface {
    protected constructor(private _name: string, private _payload: void) {}

    public get name(): string {
        return this._name
    }
}

export interface CommandHandlerInterface<C extends CommandInterface> {
    handle(command: C): Promise<void>
}