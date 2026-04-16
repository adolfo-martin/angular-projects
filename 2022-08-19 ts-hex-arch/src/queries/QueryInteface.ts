export default interface QueryInterface {
    execute(payload: any): Promise<any>
}