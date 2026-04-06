const WebService = require('./WebService');
const RepositoryMongoDB = require('./RepositoryMongoDB');

class Application {

    constructor(webservice, repository) {
        this._webservice = webservice;
        this._repository = repository;
    }

    run() {
        this.webservice.listen();
    }
}

const PORT = 5555;
const webservice = new WebService(Application.PORT);
const repository = new RepositoryMongoDB();

const app = new Application(webservice, repository);
app.run();