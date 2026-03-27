export class ControllerException extends Error {
    constructor(message: string) {
        super('[ControllerException] Cause: ' + message);
    }
}