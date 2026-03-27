import Pokemon from "../models/Pokemon.js";
import PokemonsServiceArrayMock from "../services/PokemonsServiceArrayMock.js";
import PokemonsServiceInterface from "../services/PokemonsServiceInterface.js";

document.addEventListener('DOMContentLoaded', function() {
    const service: PokemonsServiceInterface = new PokemonsServiceArrayMock();
    const pokemons = service.getPokemons();
    fillTablePokemons(pokemons);
});

function fillTablePokemons(pokemons: Pokemon[]): void {
    const nTbody = document.querySelector("#tTabPokemons>tbody");
    pokemons.forEach(pokemon => {
        const nTr = document.createElement("tr");
        const nTd = document.createElement("td");
        nTr.appendChild(nTd);
        nTd.textContent = pokemon.name;
        // @ts-ignore
        nTbody.appendChild(nTr);
    });
}