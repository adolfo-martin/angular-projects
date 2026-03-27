import fs from 'fs/promises';

export default class PokemonsRepository {
    static _allPokemonsInfo = null;

    constructor() {
        PokemonsRepository._setupAllPokemonsInfo();
    }
    
    static async _setupAllPokemonsInfo() {
        if (!PokemonsRepository._allPokemonsInfo) {
            try {
                const data = await fs.readFile('./pokemons-all.json', { encoding: 'utf-8' })
                const allPokemonsInfo = JSON.parse(data);
                const allPokemonsInfoWithIdNumber = allPokemonsInfo.map( ({ id, ...rest}) => ({ id: parseInt(id), ...rest}))
                PokemonsRepository._allPokemonsInfo = allPokemonsInfoWithIdNumber;
            } catch (error) {
                throw `Cannot retrieve pokemons info: ${error}`
            }
        }
    }

    async retrieveAllPokemonsInfo() {
        return PokemonsRepository._allPokemonsInfo;
    }

    async retrieveAllPokemonsIdName() {
        const allInfo = await this.retrieveAllPokemonsInfo();
        return allInfo.map(({ name, id}) => ({ name, id }));
    }

    async retrievePokemonById(id) {
        const allInfo = await this.retrieveAllPokemonsInfo();
        const pokemon = allInfo.find(pokemon => pokemon.id === id );
        if (!pokemon) {
            throw `Cannot find pokemon with id ${id}`
        }
        return pokemon;
    }
}