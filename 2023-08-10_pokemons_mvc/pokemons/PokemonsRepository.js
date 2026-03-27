export default class PokemonsRepository {
    async getPokemons() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data = await response.json();
        const pokemons = data.results.map(pokemon => pokemon.name);
        return pokemons;
    }

    async getPokemonById(id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return { name: data.name, height: data.height, weight: data.weight };
    }
}