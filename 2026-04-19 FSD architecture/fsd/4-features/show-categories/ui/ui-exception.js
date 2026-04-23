export class UiException extends Error {
    /**
     * 
     * @param {string} message 
     */
    constructor(message) {
        super(`[UiException] cause: ${message}`);
    }
}