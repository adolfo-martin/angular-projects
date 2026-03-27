import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

export default class VideoStreamRestServer {
    constructor(videostreamRepository, port) {
        this._videostreamRepository = videostreamRepository;
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
            () => console.log(`VideoStream server listening on port ${this._port}`)
        );
    }


    _configureRoutes() {
        this._app.get('/api/generos', this.#validateTokenMiddleware.bind(this), this._retrieveAndSendGeneros.bind(this));
        this._app.get('/api/genero/:generoId/fotografia/:fotografiaId/peliculas', this.#validateTokenMiddleware.bind(this), this._retrieveAndSendPeliculasByGeneroIdAndFotografiaId.bind(this));
        this._app.get('/api/pelicula/:peliculaId', this.#validateTokenMiddleware.bind(this), this._retrieveAndSendPeliculaById.bind(this));
        this._app.get('/api/persona/:personaId', this.#validateTokenMiddleware.bind(this), this._retrieveAndSendPersonaById.bind(this));
        this._app.get('*', this.#validateTokenMiddleware.bind(this), this._sendMessagePleaseUseOurApi.bind(this));
    }


    _sendMessagePleaseUseOurApi(req, res) {
        res.status(400)
            .send({ ok: false, message: 'Please, use our API' });
    }


    async _retrieveAndSendGeneros(req, res) {
        setTimeout(async () => {
            try {
                const generos = await this._videostreamRepository.retrieveGeneros();
                res.status(200)
                    .send({
                        ok: true,
                        database: 'genero',
                        operation: 'get_generos',
                        param: 'none',
                        info_field: 'generos',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        outcome: {
                            fields: 2,
                            quantity: generos.length,
                            generos: generos
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


    async _retrieveAndSendPeliculasByGeneroIdAndFotografiaId(req, res) {
        setTimeout(async () => {
            try {
                const generoId = req.params.generoId;
                const fotografiaId = req.params.fotografiaId;

                const peliculas = await this._videostreamRepository.retrievePeliculasByGeneroIdAndFotografiaId(generoId, fotografiaId);

                res.status(200)
                    .send({
                        ok: true,
                        database: 'peliculas',
                        operation: 'get_peliculas_by_genero_id_and_fotografia_id',
                        param: 'genero_id, fotografia_id',
                        info_field: 'genero',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        outcome: {
                            fields: 1,
                            quantity: peliculas.length,
                            peliculas
                        }
                    })
            } catch (error) {
                res.status(500)
                    .send({
                        ok: false,
                        message: `Error. Cannot retrieve information from database (${error.message})`
                    });
            }
        }, 1000);
    }


    async _retrieveAndSendPeliculaById(req, res) {
        setTimeout(async () => {
            try {
                const peliculaId = req.params.peliculaId;

                const pelicula = await this._videostreamRepository.retrievePeliculaById(peliculaId);

                if (!pelicula) {
                    res.status(400)
                        .send({
                            ok: false,
                            message: `Error. Cannot retrieve pelicula for id ${peliculaId}`
                        });
                    return;
                }

                res.status(200)
                    .send({
                        ok: true,
                        database: 'pelicula',
                        operation: 'get_pelicula_by_id',
                        param: 'pelicula_id',
                        info_field: 'pelicula',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        outcome: {
                            fields: 2,
                            quantity: 1,
                            pelicula
                        }
                    })
            } catch (error) {
                res.status(500)
                    .send({
                        ok: false,
                        message: `Error. Cannot retrieve information from database (${error.message})`
                    });
            }
        }, 1000);
    }


    async _retrieveAndSendPersonaById(req, res) {
        setTimeout(async () => {
            try {
                const personaId = req.params.personaId;

                const persona = await this._videostreamRepository.retrievePersonaById(personaId);

                if (!persona) {
                    res.status(400)
                        .send({
                            ok: false,
                            message: `Error. Cannot retrieve persona for id ${personaId}`
                        });
                    return;
                }

                res.status(200)
                    .send({
                        ok: true,
                        database: 'persona',
                        operation: 'get_persona_by_id',
                        param: 'persona_id',
                        info_field: 'persona',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        outcome: {
                            fields: 2,
                            quantity: 1,
                            persona
                        }
                    })
            } catch (error) {
                res.status(500)
                    .send({
                        ok: false,
                        message: `Error. Cannot retrieve information from database (${error.message})`
                    });
            }
        }, 1000);
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
