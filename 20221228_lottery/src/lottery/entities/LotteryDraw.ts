export default class LotteryDraw {
    private _date: Date;

    constructor(date: string, public readonly denomination: string) {
        this._date = new Date(date);
    }

    get date(): Date {
        return this._date;
    }

    // get denomination(): string {
    //     return this._denomination;
    // }
}