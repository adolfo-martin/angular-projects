import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

export default class TravelsBookingServer {
    constructor(travelsRepository, port) {
        this._travelsRepository = travelsRepository;
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
            () => console.log(`Travels server listening on port ${this._port}`)
        );
    }


    _configureRoutes() {
        this._app.get('/api/viajes/ciudades',this.#validateTokenMiddleware.bind(this),  this._retrieveAndSendCities.bind(this));
        this._app.get('/api/viajes/ciudad/:cityUuid',this.#validateTokenMiddleware.bind(this),  this._retrieveAndSendCityByUuid.bind(this));
        this._app.get('/api/viajes/ciudades-llegada/ciudad-salida/:cityUuid',this.#validateTokenMiddleware.bind(this),  this._retrieveAndSendArrivalCitiesByDepartureCity.bind(this));
        this._app.get('/api/viajes/trayecto/ciudad-salida/:departureCityUuid/ciudad-llegada/:arrivalCityUuid',this.#validateTokenMiddleware.bind(this),  this._retrieveAndSendTravelByDepartureCityAndArrivalCity.bind(this));
        this._app.get('*',this.#validateTokenMiddleware.bind(this),  this._sendMessagePleaseUseOurApi.bind(this));
    }


    _sendMessagePleaseUseOurApi(req, res) {
        res.status(400)
            .send({ ok: false, message: 'Please, use our API' });
    }


    async _retrieveAndSendCities(req, res) {
        setTimeout(async () => {
            try {
                const citiesEnglish = await this._travelsRepository.retrieveCities();
                const cities = citiesEnglish.map(({uuid, name}) => { return { uuid, nombre: name }});

                res.status(200)
                    .send({
                        ok: true,
                        database: 'city',
                        operation: 'get_cities',
                        param: 'none',
                        info_field: 'ciudades',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        result: {
                            fields: 2,
                            quantity: cities.length,
                            ciudades: cities
                        }
                    })
            } catch (error) {
                res.status(500)
                    .send({
                        ok: false,
                        message: `Error. Cannot retrieve information from database (${error})`
                    });
            }
        }, 2000);
    }


    async _retrieveAndSendCityByUuid(req, res) {
        setTimeout(async () => {
            try {
                const cityUuid = req.params.cityUuid;

                const cityEnglish = await this._travelsRepository.retrieveCityByUuid(cityUuid);
                const city = { uuid: cityEnglish.uuid, nombre: cityEnglish.name, reseña: cityEnglish.review };

                res.status(200)
                    .send({
                        ok: true,
                        database: 'city',
                        operation: 'get_city_by_uuid',
                        param: 'city_uuid',
                        info_field: 'ciudad',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        result: {
                            fields: 2,
                            quantity: 1,
                            ciudad: city
                        }
                    })
            } catch (error) {
                res.status(400)
                    .send({
                        ok: false,
                        message: `Error. Cannot retrieve information from database (${error})`
                    });
            }
        }, 1000);
    }


    async _retrieveAndSendArrivalCitiesByDepartureCity(req, res) {
        setTimeout(async () => {
            try {
                const cityUuid = req.params.cityUuid;
                const cities = await this._travelsRepository.retrieveArrivalCitiesByDepartureCity(cityUuid);
                // const cities = citiesEnglish.map(({uuid, arrivalCity, distance, duration, price}) => { return { uuid, ciudadLlegada: arrivalCity, distancia: distance, duracion: duration, precio: price }});

                res.status(200)
                    .send({
                        ok: true,
                        database: 'city',
                        operation: 'get_arrival_cities_by_departure_city',
                        param: 'departure_city_uuid',
                        info_field: 'ciudades',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        result: {
                            fields: 1,
                            quantity: cities.length,
                            ciudades: cities
                        }
                    })
            } catch (error) {
                res.status(400)
                    .send({
                        ok: false,
                        message: `Error. Cannot retrieve information from database (${error})`
                    });
            }
        }, 1000);
    }


    async _retrieveAndSendTravelByDepartureCityAndArrivalCity(req, res) {
        setTimeout(async () => {

            try {
                const departureCityUuid = req.params.departureCityUuid;
                const arrivalCityUuid = req.params.arrivalCityUuid;

                const travel = await this._travelsRepository
                    .retrieveTravelByDepartureCityAndArrivalCity(departureCityUuid, arrivalCityUuid);
                res.status(200)
                    .send({
                        ok: true,
                        database: 'city',
                        operation: 'get_travel_by_departure_city_and_arrival_city',
                        param: 'departure_city_uuid, arrival_city_uuid',
                        info_field: 'trayecto',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        result: {
                            fields: 6,
                            quantity: travel.length,
                            trayecto: travel
                        }
                    })
            } catch (error) {
                res.status(400)
                    .send({
                        ok: false,
                        message: `Error. Cannot retrieve information from database (${error})`
                    });
            }
        }, 1000);
    }


    async #validateTokenMiddleware(req, res, next) {
        next(); 

        // const token = getBearerToken(req);
        // if (!token) {
        //     res.status(407)
        //         .json({ ok: false, message: 'There is no token.' });
        //     return;
        // }

        // jwt.verify(
        //     token,
        //     process.env.ACCESS_TOKEN_SECRET || 'a91a848960fd61cb6240d06679c2ba14bbb753502cce7c62093aed36ff6d3fa7704f60e6f89b6159e156a8b758bad943d220ae9484221532f7fb440478ec580a',
        //     (err, user) => {
        //         if (err) {
        //             res.status(407)
        //                 .json({ ok: false, message: 'The access token is not valid.' });
        //             return;
        //         }

        //         req.user = user;
        //         next();
        //     })

        // function getBearerToken(req) {
        //     const authHeader = req.headers['authorization'];
        //     const token = authHeader && authHeader.split(' ')[1];
        //     return token;
        // }
    }
}
