import PokemonsDatabaseMockAdapter from "../adapters/PokemonsDatabaseMockAdapter.js"

export default class PokemonsControler {
    public async handle(req: any, res: any): Promise<void> {
        const pokemonsDatabase = new PokemonsDatabaseMockAdapter()
        const pokemons = await pokemonsDatabase.retrievePokemons()
        res.status(200).json({pokemons})
    }
}