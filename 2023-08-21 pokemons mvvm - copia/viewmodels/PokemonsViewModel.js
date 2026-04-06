// https://medium.com/tech-renaissance/using-async-generators-for-data-streams-f2cd2a1f02b3

export default class PokemonsViewModel {
    #pokemonsRepository;
    #currentPokemons;
    #currentPokemon;
    #listeners = new Map();


    constructor(pokemonsRepository) {
        this.#pokemonsRepository = pokemonsRepository;
    }


    init() {
        this.#getCurrentPokemons();
    }


    receivePokemons = function () { };


    waitForPokemons() {
        return new Promise(resolve => {
            this.receivePokemons = resolve;
        });
    }


    async * getCurrentPokemons() {
        while (true) {
            yield this.waitForPokemons();
        }
    }


    #getCurrentPokemons() {
        const pokemons = this.#pokemonsRepository
            .getPokemons()
            .map(pokemon => ({ id: pokemon.id, name: pokemon.name }));

        this.#currentPokemons = pokemons;
        this.receivePokemons(pokemons);
    }


    receivePokemon = function() {};


    waitForPokemon() {
        return new Promise(resolve => {
            this.receivePokemon = resolve;
        });
    }


    async * getCurrentPokemon() {
        while (true) {
            yield this.waitForPokemon();
        }
    }


    #getCurrentPokemon(id) {
        const pokemon = this.#pokemonsRepository.getPokemonById(id);
        this.#currentPokemon = pokemon;
        this.receivePokemon(pokemon);
    }


    setCurrentPokemon(id) {
        this.#getCurrentPokemon(id);
    }


    removePokemon(id) {
        this.#pokemonsRepository.removePokemonById(id);
        this.#getCurrentPokemons();
    }


    addPokemon(name, height, weight) {
        this.#pokemonsRepository.addPokemon(name, height, weight);
        this.#getCurrentPokemons();
    }

}