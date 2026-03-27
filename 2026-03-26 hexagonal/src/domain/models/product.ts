export class Product {
    private readonly _id: number;
    private readonly _name: string;

    public constructor(
        id: number,
        name: string,
    ) {
        this._id = id;
        this._name = name;
    }
}