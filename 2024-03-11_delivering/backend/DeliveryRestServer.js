import express from 'express';
import cors from 'cors';
import DeliveryMockRepository from './DeliveryMockRepository.js';
import { get } from './utils.js';

export default class DeliveryRestServer {

    constructor() {
        this._app = new express();
        this._app.use(cors());
        this._configureRoutes();
    }

    /**
     * @param {number} port between 2000 and 35000
     */
    set port(port) {
        this._port = port;
    }

    /**
     * returns number
     */
    get port() {
        return this._port;
    }

    /**
     * @param {DeliveryMockRepository} repository
     */
    set repository(repository) {
        this._repository = repository;
    }

    /**
     * returns DeliveryMockRepository
     */
    get repository() {
        return this._repository;
    }


    listen() {
        this._app.listen(this._port, () => console.log(`Server listening on port ${this._port}`));
    }


    _configureRoutes() {
        this._app.get('/api/vans', this._sendVans.bind(this));
        this._app.get('/api/packets', this._sendPackets.bind(this));
        this._app.get('/api/packets/:packetId', this._sendPacket.bind(this));
        this._app.get('/api/packets-within-van/:vanId', this._sendPacketsWithinVan.bind(this));
        this._app.get('**', this._sendErrorUseOurApi.bind(this));
    }

    async _sendVans(req, res) {
        try {
            const vans = await this._repository.retrieveVans();
            res.status(200).json({
                ok: true,
                vans: vans.map(van => ({
                    id: van.id,
                    plate: van.plate,
                    model: van.model,
                    capacity: van.capacity,
                    mass: van.mass,
                }))
            });
        } catch (e) {
            this._sendError(req, res, e);
        }
    }


    async _sendPackets(req, res) {
        console.log('_sendPackets');
        const authorization = req.header('Authorization');
        const token = authorization.substring(7, authorization.length);
        console.log(token);
        const isValidToken = await this._isValidToken(token);

        if (!isValidToken) {
            this._sendError(req, res, 'Token is not valid.');
            return;
        }

        try {
            const packets = await this._repository.retrievePackets();
            console.log(packets.length)
            res.status(200).json({
                ok: true,
                packets: packets.map(packet => ({
                    id: packet.id,
                    description: packet.description,
                    destinyAddress: packet.destinyAddress,
                    volume: packet.volume,
                    mass: packet.mass,
                }))
            });
        } catch (e) {
            this._sendError(req, res, e);
        }
    }


    async _sendPacket(req, res) {
        try {
            console.log('_sendPacket');
            const packetId = req.params.packetId;
            console.log(packetId);

            const packetResponse = await this._repository.retrievePacketById(packetId);
            const packet = {
                id: packetResponse.id,
                description: packetResponse.description,
                destinyAddress: packetResponse.destinyAddress,
                volume: packetResponse.volume,
                mass: packetResponse.mass,
            };

            res.status(200).json({
                ok: true,
                packet
            });
        } catch (e) {
            this._sendError(req, res, e);
        }
    }


    async _sendPacketsWithinVan(req, res) {
        try {
            console.log('_sendPacketsWithinVan')
            const vanId = req.params.vanId;
            console.log(vanId);
            const packets = await this._repository.retrievePacketsByVan(vanId);
            console.log(packets.length)
            res.status(200).json({
                ok: true,
                packets
            });
        } catch (e) {
            this._sendError(req, res, e);
        }
    }


    async _sendError(req, res, e) {
        res.status(400).json({
            ok: false,
            message: `Some error: ${e}`
        })
    }


    async _isValidToken(token) {
        try {
            // const AUTHENTICATION_SERVER_URL = 'http://authentication-server.d6cjf7gdayfxaham.francecentral.azurecontainer.io';
            const AUTHENTICATION_SERVER_URL = 'http://authenticationserver.fjh3fbdef4c9dcaw.francecentral.azurecontainer.io';
            const url = `${AUTHENTICATION_SERVER_URL}/api/validate_token`;
            const errorMessage = 'Cannot validate user';
            const data = await get(url, token, errorMessage);
            return data.ok
        } catch (error) {
            return false;
        }

        async function get(url, token, errorMessage='error') {
            console.log(JSON.stringify({token}))
            let response;
            try {
                const headers = new Headers();
                // headers.append('Content-Type', 'application/json'); 
                headers.append('Accept', 'application/json'); 
                headers.append('Content-Type', 'application/x-www-form-urlencoded');

                if (token) {
                    headers.append('Authorization', `Bearer ${token}`);
                }
                response = await fetch(url, { 
                    method: 'GET', 
                    headers, 
                    // json: true,
                    // form: {token},
                });
            } catch (error) {
                console.log('1', error);
                throw new Error(`${errorMessage}: ${error}`);
            }
            
            // Comprueba si el fetch fue correcto
            if (!response.ok) {
                console.log('2', `${errorMessage}: [${response.status} ${response.statusText}]`)
                throw new Error(`${errorMessage}: [${response.status} ${response.statusText}]`);
            }
        
            // Comprueba si estoy recibiendo JSON
            let data;
            try {
                data = await response.json();
            } catch (error) {
                console.log('3', error);
                throw new Error(`${errorMessage}: ${error}`);
            }
        
            // // Comprueba si el data es correcto
            // if (!data.ok) {
            //     throw new Error(`${errorMessage}: ${data.message}`);
            // }
        
            console.log('ggggg', data)
            return data;
        }
    }


    async _sendErrorUseOurApi(req, res) {
        res.status(400).json({
            ok: false,
            message: 'Please, use our API',
            endpoints: [
                `http://127.0.0.1:${this._port}/api/vans`,
                `http://127.0.0.1:${this._port}/api/vans/<van-id>`,
                `http://127.0.0.1:${this._port}/api/packets/<packet-id>`,
                `http://127.0.0.1:${this._port}/api/packets-within-van/<van-id>`,
            ]
        });
    }
}