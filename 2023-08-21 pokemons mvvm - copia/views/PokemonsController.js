import PokemonsRepositoryMock from '../repositories/PokemonsRepositoryMock.js';
import PokemonsViewModel from '../viewmodels/PokemonsViewModel.js';

document.addEventListener('DOMContentLoaded', _ => {
    const repository = new PokemonsRepositoryMock();
    const viewmodel = new PokemonsViewModel(repository);
    const controller = new PokemonsController(viewmodel);
});


class PokemonsController {
    #pokemonsViewModel;
    
    constructor(pokemonsViewModel) {
        this.#pokemonsViewModel = pokemonsViewModel;
        document.querySelector('#tBtnRemove').addEventListener('click', this.#onRemovePokemonClicked.bind(this));
        document.querySelector('#tBtnAdd').addEventListener('click', this.#onAddPokemonClicked.bind(this));

        this.setupExtraPokemons();
        this.setupExtraPokemon();
        
        this.#pokemonsViewModel.init();
    }
    
    
    async setupExtraPokemons() {
        for await (const pokemons of this.#pokemonsViewModel.getCurrentPokemons()) {
            this.#fillPokemonsTable(pokemons);
        }
    }


    async setupExtraPokemon() {
        for await (const pokemon of this.#pokemonsViewModel.getCurrentPokemon()) {
            this.#fillPokemonDetails(pokemon);
        }
    }

    
    #fillPokemonsTable(pokemons) {
        const nTBody = document.querySelector('#tTabPokemons>tBody');
        
        nTBody.innerHTML = '';
        this.#clearPokemonDetails();

        pokemons.forEach(pokemon => {
            const nTr = document.createElement('tr');
            nTBody.appendChild(nTr);
            const nTd = document.createElement('td');
            nTr.appendChild(nTd);
            nTd.textContent = pokemon.name;
            nTd.setAttribute('data-id', pokemon.id);
            nTd.addEventListener('click', this.#onPokemonClicked.bind(this));
        });
    }


    #fillPokemonDetails(pokemon) {
        document.querySelector('#tTxtName').value = pokemon.name;
        document.querySelector('#tTxtHeight').value = pokemon.height;
        document.querySelector('#tTxtWeight').value = pokemon.weight;
    }


    #clearPokemonDetails() {
        document.querySelector('#tTxtName').value = '';
        document.querySelector('#tTxtHeight').value = '';
        document.querySelector('#tTxtWeight').value = '';
    }


    #onPokemonClicked(e) {
        const id = parseInt(e.target.getAttribute('data-id'));
        const nBtnRemove = document.querySelector('#tBtnRemove');
        nBtnRemove.setAttribute('data-id', id);
        this.#pokemonsViewModel.setCurrentPokemon(id);        
    }

    #onRemovePokemonClicked(e) {
        const id = parseInt(e.target.getAttribute('data-id'));
        this.#pokemonsViewModel.removePokemon(id);
    }


    #onAddPokemonClicked() {
        const nTxtName = document.querySelector('#tTxtName');
        const nTxtHeight = document.querySelector('#tTxtHeight');
        const nTxtWeight = document.querySelector('#tTxtWeight');
        const name = nTxtName.value;
        const height = nTxtHeight.value;
        const weight = nTxtWeight.value;
        this.#pokemonsViewModel.addPokemon(name, height, weight);
    }
}