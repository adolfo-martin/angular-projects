import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

export default class FlightsBookingServer {
    constructor(airportsRepository, flightsRepository, port) {
        this._airportsRepository = airportsRepository;
        this._flightsRepository = flightsRepository;
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
            () => console.log(`Flights server listening on port ${this._port}`)
        );
    }


    _configureRoutes() {
        this._app.get('/api/airports',this.#validateTokenMiddleware.bind(this),  this._retrieveAndSendAirports.bind(this));
        this._app.get('/api/airport/:airportUuid',this.#validateTokenMiddleware.bind(this),  this._retrieveAndSendAirportByUuid.bind(this));
        this._app.get('/api/destination_airports/origin_airport/:airportUuid',this.#validateTokenMiddleware.bind(this),  this._retrieveAndSendDestinationAirportsByOriginAirport.bind(this));
        this._app.get('/api/flights/origin_airport/:originAirportUuid/destination_airport/:destinationAirportUuid',this.#validateTokenMiddleware.bind(this),  this._retrieveAndSendFlightsByOriginAirportAndDestinationAirport.bind(this));
        this._app.get('*',this.#validateTokenMiddleware.bind(this),  this._sendMessagePleaseUseOurApi.bind(this));
    }


    _sendMessagePleaseUseOurApi(req, res) {
        res.status(400)
            .send({ ok: false, message: 'Please, use our API' });
    }


    async _retrieveAndSendAirports(req, res) {
        setTimeout(async () => {
            try {
                const airports = await this._airportsRepository.retrieveAirports();
                res.status(200)
                    .send({
                        ok: true,
                        database: 'airport',
                        operation: 'get_airports',
                        param: 'none',
                        info_field: 'airports',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        outcome: {
                            fields: 2,
                            quantity: airports.length,
                            airports: airports
                        }
                    })
            } catch (error) {
                res.status(400)
                    .send({
                        ok: false,
                        message: `Error. Cannot retrieve information from database (${error})`
                    });
            }
        }, 2000);
    }


    async _retrieveAndSendAirportByUuid(req, res) {
        setTimeout(async () => {
            try {
                const airportUuid = parseInt(req.params.airportUuid);

                const airport = await this._airportsRepository.retrieveAirportByUuid(airportUuid);
                res.status(200)
                    .send({
                        ok: true,
                        database: 'airport',
                        operation: 'get_airport_by_uuid',
                        param: 'none',
                        info_field: 'airport',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        outcome: {
                            fields: 2,
                            quantity: 1,
                            airport: airport
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


    async _retrieveAndSendDestinationAirportsByOriginAirport(req, res) {
        setTimeout(async () => {
            try {
                const airportUuid = parseInt(req.params.airportUuid);
                const airports = await this._flightsRepository.retrieveDestinationAirportsByOriginAirport(airportUuid);
                res.status(200)
                    .send({
                        ok: true,
                        database: 'airport',
                        operation: 'get_destination_airports_by_origin_airport',
                        param: 'none',
                        info_field: 'airports',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        outcome: {
                            fields: 2,
                            quantity: airports.length,
                            airports: airports
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


    async _retrieveAndSendFlightsByOriginAirportAndDestinationAirport(req, res) {
        setTimeout(async () => {

            try {
                const originAirportUuid = parseInt(req.params.originAirportUuid);
                const destinationAirportUuid = parseInt(req.params.destinationAirportUuid);

                const flights = await this._flightsRepository
                    .retrieveFlightsByOriginAirportAndDestinationAirport(originAirportUuid, destinationAirportUuid);
                res.status(200)
                    .send({
                        ok: true,
                        database: 'airport',
                        operation: 'get_flights_by_origin_airport_and_destination_airport',
                        param: 'none',
                        info_field: 'flights',
                        date: (new Date()).toLocaleDateString(),
                        time: (new Date()).toLocaleTimeString(),
                        outcome: {
                            fields: 2,
                            quantity: flights.length,
                            flights: flights
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
