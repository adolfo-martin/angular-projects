export default class PokemonsService {
    constructor(repository) {
        this.repository = repository;
    }

    async getPokemons(request, response) {
        const pokemons = await this.repository.getPokemons();
        response
            .status(200)
            .send({ ok: true, pokemons });
    }
}