export async function retrievePokemons(page) {
    let url;
    if (!page) {
        url = 'https://pokeapi.co/api/v2/pokemon/'
    } else {
        url = '"https://pokeapi.co/api/v2/pokemon/?offset=80&limit=20",'
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw response.statusText;
        }
        const data = await response.json();
        const pokemons = data.results;
        return pokemons;
    } catch (error) {
        throw `Cannot retrieve pokemons cause of: ${error}`
    }
}


export async function retrievePokemonByUrl(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw response.statusText;
        }
        const data = await response.json();
        const pokemon = data;
        return pokemon;
    } catch (error) {
        throw `Cannot retrieve pokemon cause of: ${error}`
    }
}


export async function retrievePokemonFrontImageByUrl(url) {
    const fakePrefix = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/'

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw response.statusText;
        }
        const data = await response.json();
        const frontImageUrl = data.sprites.front_default;
        ''.search
        if (frontImageUrl.search(fakePrefix + 'http') >= 0)
            return frontImageUrl.replace(fakePrefix, '')
        else 
            return frontImageUrl
    } catch (error) {
        throw `Cannot retrieve pokemon cause of: ${error}`
    }
}

