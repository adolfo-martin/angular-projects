import express from 'express'
import dotenv from 'dotenv'
import PokemonsController from './controllers/PokemonsController.js'

dotenv.config()

const app = express()
app.use(express.json())

const port = process.env.PORT

app.get('/', (req, res) => {
    res.status(200).json({message: 'App is working fine'})
})

app.all('/pokemons', new PokemonsController().handle)

app.listen(port, () => console.log(`Listening on port ${port}`))