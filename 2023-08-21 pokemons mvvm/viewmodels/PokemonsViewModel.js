export default class PokemonsViewModel {
    #pokemonsRepository;
    #currentPokemons;
    #currentPokemon;
    #listeners = new Map();


    constructor(pokemonsRepository) {
        this.#pokemonsRepository = pokemonsRepository;
        this.#listeners.set('pokemons-gotten', []);
        this.#listeners.set('pokemon-gotten', []);
    }


    init() {
        this.#getCurrentPokemons();
    }


    #getCurrentPokemons() {
        const pokemons = this.#pokemonsRepository
            .getPokemons()
            .map(pokemon => ({ id: pokemon.id, name: pokemon.name }));

        this.#currentPokemons = pokemons;
        this.fireEvent('pokemons-gotten', pokemons);
    }


    #getCurrentPokemon(id) {
        const pokemon = this.#pokemonsRepository.getPokemonById(id);

        this.#currentPokemon = pokemon;
        this.fireEvent('pokemon-gotten', pokemon);
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


    addEventListener(eventName, callback) {
        this.#listeners.get(eventName).push(callback);
    }


    fireEvent(eventName, data) {
        this.#listeners.get(eventName).forEach(callback => callback(data));
    }
}