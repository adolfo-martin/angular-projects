export interface IUsecase {
    execute(options: any): Promise<any>;
}

export class UsecaseException extends Error {
    constructor(message: string) {
        super('[UsecaseException] Cause: ' + message);
    }
}