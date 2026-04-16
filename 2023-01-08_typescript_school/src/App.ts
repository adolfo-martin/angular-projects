import Config from './Config';
import SchoolRepositoryInterface from './repositories/SchoolRepositoryInterface';
import SchoolServer from './servers/SchoolServer';

class App {
    _schoolRepository: SchoolRepositoryInterface;
    _schoolServer: SchoolServer;

    constructor() {
        this._schoolRepository = new Config.schoolRepositoryClass();

        // @ts-ignore
        this._schoolServer = new SchoolServer(process.env.PORT || 80, this._schoolRepository);
    }

    async run() {
        this._schoolServer.listen();
    }
}

new App().run();