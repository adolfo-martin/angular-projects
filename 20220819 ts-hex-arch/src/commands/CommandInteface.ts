export default interface CommandInterface {
    execute(payload: any): Promise<any>
}