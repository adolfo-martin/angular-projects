import PokemonsDatabaseInterface from "./ports/PokemonsDatabaseInterface.js"
import PokemonsDatabaseMockAdapter from "./adapters/PokemonsDatabaseMockAdapter.js"
import Pokemon from "./domain/Pokemon.js"
import RetrievePokemonsQuery from "./queries/RetrievePokemonsQuery.js"
import AddPokemonCommand from "./commands/AddPokemonCommand.js"

class Application {
    private static _application: Application

    private constructor() { }

    public static create() {
        if (!Application._application) {
            Application._application = new Application()
        }
        return Application._application
    }

    public async run() {
        const pokemonsDatabase: PokemonsDatabaseInterface = new PokemonsDatabaseMockAdapter()

        const query = new RetrievePokemonsQuery(pokemonsDatabase)
        const pokemons = await query.execute()
        console.log(pokemons)

        const pokemon = new Pokemon(3, 'Adolfur')
        pokemon.height = 61
        pokemon.weight = 36

        const command = new AddPokemonCommand(pokemonsDatabase)
        command.execute(pokemon)

        const pokemons2 = await query.execute()
        console.log(pokemons2)
    }
}


const application = Application.create()
application.run()