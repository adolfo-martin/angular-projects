export default class Either<T, V> {
    private _isRight: boolean

    constructor(private _left: T, private _right: V) {
        this._isRight = this._right ? true : false
    }
    
    // private set isRight(isRight: boolean) {
    //     this._isRight = isRight
    // }

    // get isRight(): boolean {
    //     return this._isRight
    // }

    match(callbackLeft: Function, callbackRight: Function) {
        if (this._isRight) {
            return callbackRight(this._right)
        } else {
            return callbackLeft(this._left)
        }
    }
}