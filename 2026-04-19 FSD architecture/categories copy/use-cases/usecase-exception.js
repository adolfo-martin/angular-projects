export class UseCaseException extends Error {
    constructor(message) {
        super(`[UseCaseException] cause: ${message}`);
    }
}