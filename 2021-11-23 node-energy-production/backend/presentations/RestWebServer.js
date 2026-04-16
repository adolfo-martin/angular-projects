import express from 'express';
import cors from 'cors';

export default class RestWebServer {
    constructor() {
        this._app = new express();
        this._app.use(cors());
        this._configureRoutes();
    }


    set repository(repository) {
        this._repository = repository;
    }


    set port(port) {
        this._port = port;
    }


    listen() {
        this._app.listen(this._port, () => console.log(`Server is listening on port ${this._port}`))
    }


    async _configureRoutes() {
        this._app.get('/api/technologies', await this._sendTechnologies.bind(this))
        this._app.get('/api/generation/:technology/:date', await this._sendGenerationByTechnologyAndDate.bind(this))
        this._app.get('/api/generation/:date', await this._sendGenerationByDate.bind(this))
        this._app.get('**', await this._sendErrorUseOurApi.bind(this))
    }


    async _sendTechnologies(req, res) {
        try {
            const technologies = await this._repository.retrieveTechnologies();
            res.status(200).json({ ok: true, technologies })
        } catch (e) {
            this._sendError(e);
        }
    }


    async _sendGenerationByTechnologyAndDate(req, res) {
        try {
            const technology = req.params.technology;
            const date = req.params.date;
            const generation = await this._repository.retrieveGenerationByTechnologyAndDate(technology, date);
            res.status(200).json({ ok: true, generation });
        } catch (e) {
            this._sendError(e);
        }
    }


    async _sendGenerationByDate(req, res) {
        try {
            const date = req.params.date;
            const generation = await this._repository.retrieveGenerationByDateGroupByHour(date);
            res.status(200).json({ ok: true, generation });
        } catch (e) {
            this._sendError(e);
        }
    }


    async _sendErrorUseOurApi(req, res) {
        res.status(400).json({
            ok: false,
            message: 'Please, use our API',
            endpoints: [
                'http://127.0.0.1/api/technologies',
                'http://127.0.0.1/api/generation/<date>',
                'http://127.0.0.1/api/generation/<technology>/<date>',
            ]
        });
    }
}