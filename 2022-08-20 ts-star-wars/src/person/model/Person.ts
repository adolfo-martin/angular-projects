export default class Person {

    // private static _lastId: number = 0
    // private _id: number

    constructor(private _id: number, private _name: string) {
        // this._id = ++Person._lastId
    }

    get id(): number {
        return this._id
    }

    get name(): string {
        return this._name
    }
}