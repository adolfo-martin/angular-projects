import express from 'express';
import cors from 'cors';

export default class PokemonsWebserver {

    constructor() {
        this._app = new express();
        this._app.use(cors());
        this._configureRoutes();
    }
 

    set port(port) {
        this._port = port;
    }


    set repository(repository) {
        this._repository = repository;
    }


    listen() {
        this._app.listen(this._port, () => console.log(`Server running on port ${this._port}`))
    }


    async _configureRoutes() {
        this._app.get('/api/pokemons', await this._sendPokemons.bind(this));
        this._app.get('/api/pokemons/page/:page/quantity/:quantity', await this._sendPokemonByPage.bind(this));
        this._app.get('/api/pokemon/:pokemonId', await this._sendPokemonById.bind(this));
        this._app.get('**', await this._sendErrorUseOurApi.bind(this))
    }


    async _sendPokemons(req, res) {
        try {
            const pokemons = await this._repository.retrieveAllPokemonsIdName();
            res.status(200).json({ ok: true, timestamp: new Date(), pokemons});
        } catch (error) {
            res.status(400).json({ ok: false, timestamp: new Date(), message: `Cannot send pokemons because of ${error}`})
        }
    }


    async _sendPokemonById(req, res) {
        const pokemonId = parseInt(req.params.pokemonId)
        try {
            const pokemon = await this._repository.retrievePokemonById(pokemonId);
            res.status(200).json({ ok: true, timestamp: new Date(), pokemon});
        } catch (error) {
            res.status(400).json({ ok: false, timestamp: new Date(), message: `Cannot send pokemon with id ${pokemonId} because of ${error}`})
        }
    }


    async _sendPokemonByPage(req, res) {
        const page = parseInt(req.params.page)
        const quantity = parseInt(req.params.quantity)

        try {
            const pokemons = await this._repository.retrieveAllPokemonsIdName();

            const lowerLimit = ((page - 1) * quantity) - 1;
            const upperLimit = (page * quantity) - 1;
            const pokemonsByPage = pokemons
                .filter( (_, i) => {
                    if (i > lowerLimit && i <= upperLimit)
                        return true;
                    else
                        return false;
                })
                .map( ({ id, name }) => {
                    const url = `${req.protocol}://${req.host}:${this._port}/api/pokemon/${id}`;
                    return {id, name, url};
                })



            let previousUrl;
            if (page === 1) 
                previousUrl = null;
            else
                previousUrl = `http://127.0.0.1/api/pokemons/page/${page - 1}/quantity/10`;

            let nextUrl;
            const totalPages = Math.floor((pokemons.length + 9) / quantity);
            if (page === totalPages)
                nextUrl = null;
            else 
                nextUrl = `http://127.0.0.1/api/pokemons/page/${page + 1}/quantity/10`;

            res.status(200).json({ 
                ok: true, 
                timestamp: new Date(), 
                previousUrl,
                nextUrl,
                pokemons: pokemonsByPage
            });
        } catch (error) {
            res.status(400).json({ ok: false, timestamp: new Date(), message: `Cannot send pokemons because of ${error}`})
        }
    }


    async _sendErrorUseOurApi(req, res) {
        res.status(400).json({
            ok: false,
            message: 'Please, use our API',
            endpoints: [
                'http://127.0.0.1/api/pokemons',
                'http://127.0.0.1/api/pokemon/<pokemon-id>',
                'http://127.0.0.1/api/pokemons/page/<page>/quantity/<pokemons-per_page>',
            ]
        });
    }
}