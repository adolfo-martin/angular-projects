export async function retrievePokemonsByPage(page, quantity) {
    try {
        const url = `http://127.0.0.1/api/pokemons/page/${page}/quantity/${quantity}`
        const response = await fetch(url)
        if (!response.ok) {
            throw response.statusText
        }
        const data = await response.json()
        if (!data.ok) {
            throw data.message
        }
        return data.pokemons
    } catch (error) {
        throw `Cannot retrieve pokemons: ${error}`
    }
}


export async function retrievePokemonExtraInfo(pokemonId) {
    try {
        const url = `http://127.0.0.1/api/pokemon/${pokemonId}`
        const response = await fetch(url)
        if (!response.ok) {
            throw response.statusText
        }
        const data = await response.json()
        if (!data.ok) {
            throw data.message
        }
        return data.pokemon
    } catch (error) {
        throw `Cannot retrieve pokemon information of pokemon ${pokemonId}: ${error}`
    }
}