export default class Maybe {
    constructor(value) {
        this._value = value
    }

    get value() {
        return this._value
    }

    isNothing() {
        return !this._value ? true : false
    }

    map(callback) {
        if (this.isNothing()) {
            return new Maybe(null)
        } else {
            return new Maybe(callback(this.value))
        }
    }

    join() {
        return this.value
    }

    chain(callback) {
        return this.map(callback).join()
    }

    orElse(alternative) {
        if (this.isNothing()) {
            return new Maybe(alternative)
        } else {
            return this
        }
    }
}