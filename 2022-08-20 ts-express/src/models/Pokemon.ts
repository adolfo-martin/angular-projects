export default class Pokemon {
    _height!: number
    _weight!: number

    constructor(private _id: number, private _name: string) { }

    public get id(): number {
        return this._id
    }

    public get name(): string {
        return this._name
    }

    public set height(value: number) {
        this._height = value
    }
 
    public get height(): number {
        return this._height
    }

    public set weight(value: number) {
        this._weight = value
    }
 
    public get weight(): number {
        return this._weight
    }
}