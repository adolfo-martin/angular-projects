import { getPokemons } from '../services/PokemonsService.js';

export function fillTablePokemons() {
    Promise.resolve()
        .then(getPokemons)
        .then(extractNames)
        .then(renderTable)
        .catch(error => console.error(error.message));
}

function renderTable(items) {
    for (let item of items) {
        console.log(item);
    }
}

function extractNames(pokemons) {
    throw new Error('Not implemented');
    return pokemons.map(pokemon => pokemon.name);
}

fillTablePokemons();