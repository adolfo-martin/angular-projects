// https://blog.logrocket.com/5-ways-to-make-http-requests-in-node-js/
// npm init -y
// npm install --save node-fetch
// npm install express

import CountriesRepository from './CountriesRepository.js'
import Server from './Server.js'


const countriesRepository = new CountriesRepository()
const server = new Server(3000, countriesRepository)
server.listen()