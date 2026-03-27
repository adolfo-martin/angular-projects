export default class Pokemon {
    constructor(private _id: number, private _name: string, private _weight: number, private _height: number) {}

    public get id(): number {
        return this._id
    }

    public get name(): string {
        return this._name
    }

    public get weight(): number {
        return this._weight
    }

    public get height(): number {
        return this._height
    }
}