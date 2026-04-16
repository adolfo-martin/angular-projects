import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

export default class HardwareshopRestServer {

    static #instance;
    #port;
    #repository;
    #app;


    constructor(port, repository) {
        if (!HardwareshopRestServer.#instance) {
            HardwareshopRestServer.#instance = this;

            this.#port = port;
            this.#repository = repository;

            this.#app = new express();
            this.#app.use(cors());
            this.#configureRoutes();
        }

        return this;
    }


    listen() {
        this.#app.listen(this.#port, () =>
            console.log(`Hardwareshop server listening on port ${this.#port}`)
        );
    }


    #configureRoutes() {
        this.#app.get('/api/sockets', this.#validateTokenMiddleware.bind(this), this.#retrieveAndSendSockets.bind(this));
        this.#app.get('/api/processors', this.#validateTokenMiddleware.bind(this), this.#retrieveAndSendProcessors.bind(this));
        this.#app.get('/api/socket/:socketUuid/processors', this.#validateTokenMiddleware.bind(this), this.#retrieveAndSendProcessorsBySocketUuid.bind(this));
        this.#app.get('/api/processor/:processorUuid', this.#validateTokenMiddleware.bind(this), this.#retrieveAndSendProcessorByUuid.bind(this));
        this.#app.get('/api/motherboards', this.#validateTokenMiddleware.bind(this), this.#retrieveAndSendMotherboards.bind(this));
        this.#app.get('/api/socket/:socketUuid/motherboards', this.#validateTokenMiddleware.bind(this), this.#retrieveAndSendMotherboardsBySocketUuid.bind(this));
        this.#app.get('/api/motherboard/:motherboardUuid', this.#validateTokenMiddleware.bind(this), this.#retrieveAndSendMotherboardByUuid.bind(this));
        this.#app.get('*', this.#validateTokenMiddleware.bind(this), this.#sendPleaseUseOurApi.bind(this));
    }


    #sendPleaseUseOurApi(req, res) {
        setTimeout(async () => {
            res.status(404).json({ ok: false, message: 'Please, use our API.' });
        }, 1000);
    }


    async #retrieveAndSendSockets(req, res) {
        setTimeout(async () => {
            try {
                const sockets = await this.#repository.retrieveSockets();
                res.status(200).json({ ok: true, sockets });
            } catch (error) {
                res.status(400).json({ ok: false, message: error.message });
            }
        }, 1000);
    }


    async #retrieveAndSendProcessors(req, res) {
        setTimeout(async () => {
            try {
                const processors = await this.#repository.retrieveProcessors();
                res.status(200).json({ ok: true, processors });
            } catch (error) {
                res.status(400).json({ ok: false, message: error.message });
            }
        }, 1000);
    }


    async #retrieveAndSendProcessorsBySocketUuid(req, res) {
        setTimeout(async () => {
            try {
                const socketUuid = req.params.socketUuid;
                if (!socketUuid) {
                    res.status(400).json({ ok: false, message: 'There is not socket uuid.' });
                    return;
                }

                const processors = await this.#repository.retrieveProcessorsBySocketUuid(socketUuid);
                const processorsUuids = processors.map(({ uuid }) => uuid);
                res.status(200).json({ ok: true, processors: processorsUuids });
            } catch (error) {
                res.status(400).json({ ok: false, message: error.message });
            }
        }, 1000);
    }


    async #retrieveAndSendProcessorByUuid(req, res) {
        setTimeout(async () => {
            try {
                const processorUuid = req.params.processorUuid;
                if (!processorUuid) {
                    res.status(400).json({ ok: false, message: 'There is not processor uuid.' });
                    return;
                }

                const processor = await this.#repository.retrieveProcessorByUuid(processorUuid);
                res.status(200).json({ ok: true, processor });
            } catch (error) {
                res.status(400).json({ ok: false, message: error.message });
            }
        }, 1000);
    }


    async #retrieveAndSendMotherboards(req, res) {
        setTimeout(async () => {
            try {
                const motherboards = await this.#repository.retrieveMotherboards();
                res.status(200).json({ ok: true, motherboards });
            } catch (error) {
                res.status(400).json({ ok: false, message: error.message });
            }
        }, 1000);
    }


    async #retrieveAndSendMotherboardsBySocketUuid(req, res) {
        setTimeout(async () => {
            try {
                const socketUuid = req.params.socketUuid;
                if (!socketUuid) {
                    res.status(400).json({ ok: false, message: 'There is not socket uuid.' });
                    return;
                }

                const motherboards = await this.#repository.retrieveMotherboardsBySocketUuid(socketUuid);
                const motherboardsUuids = motherboards.map(({ uuid }) => uuid);
                res.status(200).json({ ok: true, motherboards: motherboardsUuids });
            } catch (error) {
                res.status(400).json({ ok: false, message: error.message });
            }
        }, 1000);
    }


    async #retrieveAndSendMotherboardByUuid(req, res) {
        setTimeout(async () => {
            try {
                const motherboardUuid = req.params.motherboardUuid;
                if (!motherboardUuid) {
                    res.status(400).json({ ok: false, message: 'There is not motherboard uuid.' });
                    return;
                }

                const motherboard = await this.#repository.retrieveMotherboardByUuid(motherboardUuid);
                res.status(200).json({ ok: true, motherboard });
            } catch (error) {
                res.status(400).json({ ok: false, message: error.message });
            }
        }, 1000);
    }

    async #validateTokenMiddleware(req, res, next) {
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