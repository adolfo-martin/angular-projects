export default class DeliveringService {
    static URL_API = 'http://127.0.0.1:3000/api'

    /**
     * Retrieve all vans from url and returns them.
     * @returns {Promise<[{id: string, plate: string, model: string, capacity: number, mass: number}]>}
     */
    async getVans() {
        const url = DeliveringService.URL_API + '/vans';
        const response = await fetch(url);
        const data = await response.json();
        return data.vans;
    }

    /**
     * Retrieve a van identified by its id from url and returns it.
     * @param {number} id
     * @returns {Promise<{id: string, plate: string, model: string, capacity: number, mass: number}>}
     */
    async getVan(id) {
        const url = DeliveringService.URL_API + '/vans';
        const response = await fetch(url);
        const data = await response.json();
        return data.vans;
    }

    /**
     * Retrieve all packets from url and returns them.
     * @returns {Promise<[{id: string, plate: string, model: string, capacity: number, mass: number}]>}
     */
    async getPackets() {
        const url = DeliveringService.URL_API + '/packets';
        const response = await fetch(url);
        const data = await response.json();
        return data.packets;
    }

    /**
     * Retrieve a packet identified by its id from url and returns it.
     * @param {number} id
     * @returns {Promise<{id: string, plate: string, model: string, capacity: number, mass: number}>}
     */
    async getPacket(id) {
        const url = DeliveringService.URL_API + `/packets/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.packet;
    }

    /**
     * Retrieve a packet identified by its id from url and returns it.
     * @param {number} vanId
     * @returns {Promise<[{id: string, plate: string, model: string, capacity: number, mass: number}]>}
     */
    async getPacketsByVan(vanId) {
        const url = DeliveringService.URL_API + `/packets-within-van/${vanId}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.packets;
    }
}