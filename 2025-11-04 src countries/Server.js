import express from 'express'
import cors from 'cors'

export default class Server {

    constructor(port, countriesRepository) {
        this._port = port
        this._countriesRepository = countriesRepository

        this._app = express()
        this._app.use(cors())
        this._app.use(express.json())
        this._app.use(express.urlencoded({ extended: true }))

        this._configureRoutes()
    }


    listen() {
        this._app.listen(this._port, () =>
            console.log(`Application is listening on port ${this._port} ...`)
        )
    }


    _configureRoutes() {
        this._app.get('/', (req, res) => res.send('Please, use our API'))
        this._app.get('/api/continents', this._retrieveAllContinents.bind(this))
        this._app.get('/api/continents/:code/countries', this._retrieveAllCountriesByContinent.bind(this))
        this._app.get('/api/countries', this._retrieveAllCountries.bind(this))
        this._app.get('/api/countries/:code', this._retrieveCountryByCode.bind(this))
        this._app.get('*', (req, res) => res.redirect('/'))
    }


    _retrieveAllContinents(req, res) {
        const milisecons = Utils.generateRandomMilisecons(1500, 3000)

        setTimeout(() => {
            if (this._isSomeError(res)) return

            console.log('Retrieving all continents');
            const continents = this._countriesRepository.retrieveAllContinents()
            res.status(200).json({ ok: true, continents })
        }, milisecons)
    }


    _retrieveAllCountries(req, res) {
        const milisecons = Utils.generateRandomMilisecons(1500, 3000)

        setTimeout(() => {
            //if (this._isSomeError(res)) return

            console.log('Retrieving all countries');
            const countries = this._countriesRepository.retrieveAllCountries()
            res.status(200).json({ ok: true, countries })
        }, milisecons)
    }


    _retrieveAllCountriesByContinent(req, res) {
        const milisecons = Utils.generateRandomMilisecons(1500, 3000)

        setTimeout(() => {
            //if (this._isSomeError(res)) return

            const code = req.params.code
            console.log(`Retrieving the countries of continent with code ${code}`)

            const countries = this._countriesRepository.retrieveCountriesByContinent(code)
            if (!countries) {
                const message = `There is a problem with code ${code}`
                res.status(400).json({ ok: false, message })
                return
            }

            res.status(200).json({ ok: true, countries: countries })
        }, milisecons)
    }


    _retrieveCountryByCode(req, res) {
        const milisecons = Utils.generateRandomMilisecons(1500, 3000)

        setTimeout(() => {
            //if (this._isSomeError(res)) return

            const code = req.params.code
            console.log(`Retrieving the country with code ${code}`)

            const country = this._countriesRepository.retrieveCountryByCode(code)
            if (!country) {
                const message = `There is a problem with code ${code}`
                res.status(400).json({ ok: false, message })
                return
            }

            res.status(200).json({ ok: true, country })
        }, milisecons)
    }


    _isSomeError(res) {
        if (this._isServerError(res)) {
            return true
        } else if (this._isRequestError(res)) {
            return true
        } else {
            return false
        }
    }

    _isServerError(res) {
        if (Utils.isRandomError(0.5)) {
            const message = `There is a problem in our server. Please, try it again in a while.`
            res.status(500).json({ ok: false, message })
            return true
        } else {
            return false
        }
    }

    _isRequestError(res) {
        if (Utils.isRandomError(0.0)) {
            const message = `There is a problem in your request. Please, resolve the problem.`
            res.status(400).json({ ok: false, message })
            return true
        } else {
            return false
        }
    }

}

class Utils {
    static isRandomError(probability) {
        return Math.random() < probability ? true : false
    }

    static generateRandomMilisecons(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}