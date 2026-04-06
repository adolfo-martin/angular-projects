export default class Student {
    public constructor(private _uuid: string, private _firstname: string, private _lastname: string) { }


    public get uuid(): string {
        return this._uuid;
    }


    public get firstname(): string {
        return this._firstname;
    }


    public get lastname(): string {
        return this._lastname;
    }
}