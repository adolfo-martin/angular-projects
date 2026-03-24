import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

export default class BenchmarkRestServer {
    constructor(benchmarkRepository, port) {
        this._benchmarkRepository = benchmarkRepository;
        this._port = port;

        this._app = express();
        this._app.use(cors());
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: true }));
        this._configureRoutes();
    }


    listen() {
        this._app.listen(
            this._port,
            () => console.log(`Benchmark server listening on port ${this._port}`)
        );
    }


    _configureRoutes() {
        this._app.get('/rest/sockets', this.#validateTokenMiddleware.bind(this), this._retrieveAndSendSockets.bind(this));
        this._app.get('/rest/socket/:socketId/cores/:coresQuantity/processors', this.#validateTokenMiddleware.bind(this), this._retrieveAndSendProcessorsBySocketIdAndCoresQuantity.bind(this));
        this._app.get('/rest/processor/:processorId', this.#validateTokenMiddleware.bind(this), this._retrieveAndSendProcessorById.bind(this));
        // this._app.get('/rest/persona/:personaId', this.#validateTokenMiddleware.bind(this), this._retrieveAndSendPersonaById.bind(this));
        this._app.get('*', this.#validateTokenMiddleware.bind(this), this._sendMessagePleaseUseOurApi.bind(this));
    }


    _sendMessagePleaseUseOurApi(req, res) {
        res.status(400)
            .send({ ok: false, message: 'Please, use our API' });
    }


    async _retrieveAndSendSockets(req, res) {
        setTimeout(async () => {
            try {
                const sockets = await this._benchmarkRepository.retrieveSockets();
                res.status(200)
                    .send({
                        ok: true,
                        database: 'benchmark',
                        operation: 'get_sockets',
                        param: 'none',
                        info_field: 'sockets',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        information: {
                            fields: 7,
                            quantity: sockets.length,
                            sockets: sockets
                        }
                    })
            } catch (error) {
                res.status(500)
                    .send({
                        ok: false,
                        message: `Error. Cannot retrieve information from database: (${error.message})`
                    });
            }
        }, 2000);
    }


    async _retrieveAndSendProcessorsBySocketIdAndCoresQuantity(req, res) {
        setTimeout(async () => {
            try {
                const socketId = req.params.socketId;
                const coresQuantity = parseInt(req.params.coresQuantity);

                const processors = await this._benchmarkRepository.retrieveProcessorsBySocketIdAndCoresQuantity(socketId, coresQuantity);

                res.status(200)
                    .send({
                        ok: true,
                        database: 'benchmark',
                        operation: 'get_processors_by_socket_id_and_cores_number',
                        param: 'socket_id, cores_quantity',
                        info_field: 'socket',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        information: {
                            fields: 1,
                            quantity: processors.length,
                            processors
                        }
                    })
            } catch (error) {
                res.status(500)
                    .send({
                        ok: false,
                        message: `Error. Cannot retrieve information from database (${error.message})`
                    });
            }
        }, 2000);
    }


    async _retrieveAndSendProcessorById(req, res) {
        setTimeout(async () => {
            try {
                const processorId = req.params.processorId;

                const processor = await this._benchmarkRepository.retrieveProcessorById(processorId);

                if (!processor) {
                    res.status(400)
                        .send({
                            ok: false,
                            message: `Error. Cannot retrieve processor for id ${processorId}`
                        });
                    return;
                }

                res.status(200)
                    .send({
                        ok: true,
                        database: 'benchmark',
                        operation: 'get_processor_by_id',
                        param: 'processor_id',
                        info_field: 'processor',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        information: {
                            fields: 8,
                            quantity: 1,
                            processor
                        }
                    })
            } catch (error) {
                res.status(500)
                    .send({
                        ok: false,
                        message: `Error. Cannot retrieve information from database (${error.message})`
                    });
            }
        }, 500);
    }

    
    async #validateTokenMiddleware(req, res, next) {
        // next();
        // return;

        const token = getBearerToken(req);
        if (!token) {
            res.status(407)
                .json({ ok: false, message: 'There is no token.' });
            return;
        }

        jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET || 'a91a848960fd61cb6240d06679c2ba14bbb753502cce7c62093aed36ff6d3fa7704f60e6f89b6159e156a8b758bad943d220ae9484221532f7fb440478ec580a',
            (err, user) => {
                if (err) {
                    res.status(407)
                        .json({ ok: false, message: 'The access token is not valid.' });
                    return;
                }

                req.user = user;
                next();
            })

        function getBearerToken(req) {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];
            return token;
        }
    }
}
