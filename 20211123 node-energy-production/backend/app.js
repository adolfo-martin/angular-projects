// npm init -y
// npm install node-fetch --save

// https://apidatos.ree.es/es/datos/generacion/estructura-generacion?start_date=2021-11-22T00:00&end_date=2021-11-22T23:59&time_trunc=day&cached=true

// https://demanda.ree.es/WSvisionaMovilesPeninsulaRest/resources/demandaGeneracionPeninsula?callback=angular.callbacks._2&curva=DEMANDA&fecha=2021-11-22

import RestWebServer from './presentations/RestWebServer.js';
import ReeWebRepository from './repositories/ReeWebRepository.js'

try {
    const repository = new ReeWebRepository();

    const webServer = new RestWebServer();
    webServer.port = 80;
    webServer.repository = repository;
    webServer.listen();
} catch (e) {
    console.error(e)
}