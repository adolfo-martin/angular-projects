export async function getPokemons() {
    try {
        var response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    } catch (error) {
        throw new Error(error.message);
    }

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    try {
        var data = await response.json()
    } catch (error) {
        throw new Error(error.message);
    }

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/')[6],
        name: pokemon.name
    }));

    return pokemons;
}