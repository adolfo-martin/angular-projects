import fetch from 'node-fetch'

export default class CountriesRepository {

    constructor() {
        this._countriesAllInformation = undefined
        this._countriesCodesAndNames = undefined
        this._prepareRepository()
    }

    _prepareRepository() {
        const changeContinentCode = awfulCode => {
            switch (awfulCode) {
                case 'Americas': return 'AME';
                case 'Antartic': return 'ANT';
                case 'Europe': return 'EUR';
                case 'Asia': return 'ASI';
                case 'Africa': return 'AFR';
                case 'Oceania': return 'OCE';
            }
        };

        const extractAllInformation =
            countries => this._countriesAllInformation = countries
                .filter(({cioc}) => cioc)
                .map(({ cioc: code, region, ...rest }) => ({ code, continent: changeContinentCode(region), ...rest }))

        const extractCodeName =
            ({ code, name }) => ({ code, name: name.common })

        const extractCodesAndNames = countries =>
            this._countriesCodesAndNames = countries.map(extractCodeName)

        fetch('https://restcountries.com/v3.1/all?fields=cioc,name,region,capital,area,population,flags')
            .then(response => response.json())
            .then(extractAllInformation)
            .then(extractCodesAndNames)
            .catch(console.error)
    }


    retrieveAllContinents() {
        return [
            { code: 'AME', name: 'América' },
            // { code: 'ANT', name: 'Antártida' },
            { code: 'EUR', name: 'Europa' },
            { code: 'ASI', name: 'Asia' },
            { code: 'AFR', name: 'África' },
            { code: 'OCE', name: 'Oceanía' },
        ]
    }


    retrieveAllCountries() {
        return this._countriesCodesAndNames
    }


    retrieveCountriesByContinent(continentCode) {
        return this._countriesAllInformation
            .filter(country => country.continent === continentCode)
            .map(({code, name}) => ({code, name: name.common}))
    }


    retrieveCountryByCode(code) {
        return this._countriesAllInformation.find(country => country.code === code)
    }

}