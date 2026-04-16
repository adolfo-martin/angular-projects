export type Pokemon = {
    id: number,
    name: string,
    height: number,
    weight: number
}

export default class PokemonsDatabaseMock {
    private static _database: PokemonsDatabaseMock
    private _pokemons: Pokemon[]

    private constructor() { 
        this._pokemons = []

        this._pokemons.push({
            id: 1,
            name: 'Pikachu',
            height: 55,
            weight: 21
        })

        this._pokemons.push({
            id: 2,
            name: 'Bulbasur',
            height: 72,
            weight: 48
        })
    }

    public static create() {
        if (!PokemonsDatabaseMock._database) {
            PokemonsDatabaseMock._database = new PokemonsDatabaseMock()
        }
        return PokemonsDatabaseMock._database
    }

    public selectPokemons(): Pokemon[] {
        return this._pokemons
    }

    public insertPokemon(pokemon: Pokemon): void {
        this._pokemons.push(pokemon)
    }
}