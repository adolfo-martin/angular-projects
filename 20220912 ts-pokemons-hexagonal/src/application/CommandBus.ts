import { CommandInterface, CommandHandlerInterface } from './Command.js'

export default class CommandBus{
    private static _bus = new Map<string, CommandHandlerInterface<CommandInterface>>()

    public register(command: CommandInterface, commandHandler: CommandHandlerInterface<CommandInterface>): void {
        CommandBus._bus.set(command.name, commandHandler)
    }

    public async execute(command: CommandInterface): Promise<void> {
        const handler = CommandBus._bus.get(command.name)
        await handler?.handle(command)
    }
}