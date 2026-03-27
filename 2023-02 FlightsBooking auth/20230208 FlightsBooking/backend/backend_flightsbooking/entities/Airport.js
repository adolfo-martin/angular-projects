export default class Airport {
    constructor(uuid, commonname, longname, codename) {
        this._uuid = uuid;
        this._commonname = commonname;
        this._longname = longname;
        this._codename = codename;
    }

    get uuid() {
        return this._uuid;
    }

    get commonname() {
        return this._commonname;
    }

    get longname() {
        return this._longname;
    }

    get codename() {
        return this._codename;
    }

    toObject() {
        return { uuid: this._uuid, commonname: this._commonname, longname: this._longname, codename: this._codename };
    }
}