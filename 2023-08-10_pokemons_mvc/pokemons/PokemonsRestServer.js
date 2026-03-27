import express from 'express';

export default class PokemonsRestServer {
    constructor(port, pokemonsService) {
        this.port = port;
        this.pokemonsService = pokemonsService;
        this.app = express();

        const router = express.Router();
        router
            .get('/', this.pokemonsService.getPokemons.bind(this.pokemonsService))
            .get('/:pokemonId', (req, res) => { });
        this.app.use('/api/pokemons', router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}