export default class PokemonsMockRepository {
    #pokemons = [];

    constructor() {
        this.#pokemons = [
            { id: 1, name: 'Pikachu', height: 137, weight: 42},
            { id: 2, name: 'Bulbasaur', height: 147, weight: 84},
            { id: 3, name: 'Ivysaur', height: 37, weight: 33},
            { id: 4, name: 'Venusaur', height: 38, weight: 42},
            { id: 5, name: 'Charmander', height: 83, weight: 65},
            { id: 6, name: 'Charmeleon', height: 193, weight: 42},
            { id: 7, name: 'Charizard', height: 17, weight: 24},
            { id: 8, name: 'Squirtle', height: 122, weight: 105},
            { id: 9, name: 'Wartortle', height: 72, weight: 68},
            { id: 10, name: 'Blastoise', height: 172, weight: 93},
        ];
    }

    getPokemons() {
        return this.#pokemons;
    }

    getPokemonById(id) {
        return this.#pokemons.find(pokemon => pokemon.id === id);
    }

    removePokemonById(id) {
        this.#pokemons = this.#pokemons.filter(pokemon => pokemon.id !== id);
    }

    addPokemon(name, height, weight) {
        const id = this.#pokemons.length + 1;
        this.#pokemons.push({ id, name, height, weight });
    }
}