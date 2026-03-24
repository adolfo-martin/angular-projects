import DeliveringService from './services/DeliveringService.js';

document.addEventListener('DOMContentLoaded', setup);

async function setup(e) {
    
    const vanId = extractVanFromUrl();
    console.log(vanId)
    if (vanId) {
        const packets = await retrievePacketsByVan(vanId);
        renderTablePackets(packets);
    } else {
        const packets = await retrievePackets();
        renderTablePackets(packets);
    }

}


function extractVanFromUrl() {
    return new URLSearchParams(window.location.search).get('van');
}

/**
 * Retrieve all packets from web service and returns them.
 * @returns {Promise<[{id: string, description: string, destinyAddress: string, volume: number, mass: number}]>}
 */
async function retrievePackets() {
    const service = new DeliveringService();
    const packets = await service.getPackets();
    return packets;
}

/**
 * Retrieve all packets from web service and returns them.
 * @param {string} vanId
 * @returns {Promise<[{id: string, description: string, destinyAddress: string, volume: number, mass: number}]>}
 */
async function retrievePacketsByVan(vanId) {
    const service = new DeliveringService();
    const packetsIds = await service.getPacketsByVan(vanId);

    const packets = await Promise.all(packetsIds.map(packetId => service.getPacket(packetId)));
    return packets;
}

/**
 * Render packets within the select packets.
 * @param {[{id: string, description: string, destinyAddress: string, volume: number, mass: number}]} packets
 */
function renderTablePackets(packets) {
    const nTbody = document.querySelector('#tTabPackets>tbody');

    packets.forEach(packet => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);

        const nTdDescription = document.createElement('td');
        nTr.appendChild(nTdDescription);
        nTdDescription.textContent = packet.description;

        const nTdDestinyAddress = document.createElement('td');
        nTr.appendChild(nTdDestinyAddress);
        nTdDestinyAddress.textContent = packet.destinyAddress;

        const nTdVolume = document.createElement('td');
        nTr.appendChild(nTdVolume);
        nTdVolume.textContent = packet.volume;

        const nTdMass = document.createElement('td');
        nTr.appendChild(nTdMass);
        nTdMass.textContent = packet.mass;
    });
}