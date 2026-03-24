import DeliveringService from './services/DeliveringService.js';

document.addEventListener('DOMContentLoaded', setup);

async function setup(e) {
    setupLogButton();

    const vans = await retrieveVans();
    renderSelectVans(vans);
}


function setupLogButton() {
    const nButton = document.querySelector('#tButSeePackets');
    nButton.addEventListener('click', e => {
        const nSelect = document.querySelector('#tSelVans');
        const vanId = nSelect.value;
        window.location.href = `./packets.html?van=${vanId}`;
    });
}


/**
 * Retrieve all vans from web service and returns them.
 * @returns {Promise<[{id: string, plate: string, model: string, capacity: number, mass: number}]>}
 */
async function retrieveVans() {
    const service = new DeliveringService();
    const vans = await service.getVans();
    return vans;
}

/**
 * Render vans within the select vans.
 * @param {[{id: string, plate: string, model: string, capacity: number, mass: number}]} vans
 */
function renderSelectVans(vans) {
    const nSelect = document.querySelector('#tSelVans');

    vans
        .toSorted((van1, van2) => {
            if (van1.model.localeCompare(van2.model) === 0) {
                return van1.plate.localeCompare(van2.plate);
            } else {
                return van1.model.localeCompare(van2.model);
            }
        })
        .forEach(van => {
            const nOption = document.createElement('option');
            nSelect.appendChild(nOption);
            nOption.value = van.id;
            nOption.textContent  = `${van.model} (${van.plate})`;
        });
}