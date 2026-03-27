export default class Flight {
    constructor(uuid, originAirport, destinationAirport, flightCode, datetime, flightPrice, suitcasePrice) {
        this._uuid = uuid;
        this._originAirport = originAirport;
        this._destinationAirport = destinationAirport;
        this._flightCode = flightCode;
        this._datetime = datetime;
        this._flightPrice = flightPrice;
        this._suitcasePrice = suitcasePrice;
    }

    get uuid() {
        return this._uuid;
    }

    get originAirport() {
        return this._originAirport;
    }

    get destinationAirport() {
        return this._destinationAirport;
    }

    get flightCode() {
        return this._flightCode;
    }

    get datetime() {
        return this._datetime;
    }

    get flightPrice() {
        return this._flightPrice;
    }

    get suitcasePrice() {
        return this._suitcasePrice;
    }

    toObject() {
        return {
            uuid: this._uuid,
            originAirport: this._originAirport,
            destinationAirport: this._destinationAirport,
            flightCode: this._flightCode,
            datetime: this._datetime,
            flightPrice: this._flightPrice,
            suitcasePrice: this._suitcasePrice,
        };
    }
}