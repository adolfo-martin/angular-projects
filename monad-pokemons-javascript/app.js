import fetch from "node-fetch"


class _Maybe {
    constructor(result, errorType, errorMessage) {
        this.result = result
        this.errorType = errorType
        this.errorMessage = errorMessage
    }

    unwrap() {
        return this.result
    }
}

class MaybeResult extends _Maybe {
    constructor(result) {
        super(result, undefined, undefined)
    }
}

class MaybeError extends _Maybe {
    constructor(errorType, errorMessage) {
        super(undefined, errorType, errorMessage)
    }
}


const pokemons = await retrievePokemons()
const pokemonsExtended = await retrievePokemonsExtended(pokemons)
console.log(await pokemonsExtended.unwrap())


async function retrievePokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const response = await fetch(url)
    if (!response.ok) {
        return new MaybeError(response.statusText)
    }
    const data = await response.json()
    const pokemons = data.results
    return new MaybeResult(pokemons)
}


async function retrievePokemonsExtended(pokemons) {
    if (!pokemons) {
        return undefined
    }

    const pokemonsExtended = Promise.all(pokemons.unwrap().map(async ({ url }) => await (await retrievePokemon(url)).unwrap()))
    return new MaybeResult(pokemonsExtended)
}


async function retrievePokemon(url) {
    const response = await fetch(url)
    if (!response.ok) {
        return new MaybeError(response.statusText)
    }
    const data = await response.json()
    const { name, height, weight } = data
    return new MaybeResult({ name, height, weight })
}