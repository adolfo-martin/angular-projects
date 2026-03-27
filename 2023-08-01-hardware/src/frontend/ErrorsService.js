export default class ErrorsService {
    static handlers = new Map();

    static addHandler(type, handler) {
        ErrorsService.handlers.set(type, handler);
    }

    static handle(type) {
        const handler = ErrorsService.handlers.get(type);
        return handler;
    }
}