import fetch from 'node-fetch';

export default class ReeWebRepository {

    static memoiseGenerationByData = new Map();


    static _extractYearMonthDay = date => date.substring(0, 10)
    static _extractHourMinute = date => date.substring(11, 16)
    static _extractHour = date => date.substring(0, 2)
    static _extractMinute = date => date.substring(3, 5)


    async retrieveTechnologies() {
        return {
            // 'ts': 'timestamp',
            // 'dem': 'demanda',
            'eol': 'eolica',
            'nuc': 'nuclear',
            'gf': 'petroleo o gasoleo',
            'car': 'carbón',
            'cc': 'ciclo combinado',
            'hid': 'hidráulica',
            // 'aut': 'desconocido',
            // 'inter': 'intercambios internacionales',
            // 'icb': 'intercambio balear',
            // 'sol': 'solar',
            'solFot': 'solar fotovoltaica',
            'solTer': 'solar térmica',
            'termRenov': 'térmica renovable',
            'cogenResto': 'cogeneración y residuos'
        }
    }

    async _retrieveGenerationByDate(date) {
        if (ReeWebRepository.memoiseGenerationByData.has(date)) {
            console.log(`Data retrieved from memoise ${date}`);
            return ReeWebRepository.memoiseGenerationByData.get(date);
        }

        try {
            const url = `https://demanda.ree.es/WSvisionaMovilesPeninsulaRest/resources/demandaGeneracionPeninsula`
                + `?callback=angular.callbacks._2&curva=DEMANDA&fecha=${date}`
            const response = await fetch(url);
            const data0 = await response.text();
            const data1 = data0.replace('angular.callbacks._2(', '');
            const data2 = data1.replace(');', '');
            const data3 = JSON.parse(data2);
            const diaryMeasures = data3.valoresHorariosGeneracion;

            const diaryMeasuresFiltered = diaryMeasures.map(
                ({ ts, eol, nuc, gf, car, cc, hid, sol, solFot, solTer, termRenov, cogenResto }) =>
                    ({ ts, eol, nuc, gf, car, cc, hid, solFot, solTer, termRenov, cogenResto })
            );

            console.log(`Data retrieved from fetch ${date}`)
            ReeWebRepository.memoiseGenerationByData.set(date, diaryMeasuresFiltered);
            return diaryMeasuresFiltered;
        } catch (e) {
            const message = `[ReeWebRepository._retrieveGenerationByDate(${date})] ${e}`;
            console.log(message);
            throw message;
        }
    }


    async retrieveGenerationByTechnologyAndDate(technology, date) {
        try {
            const diaryMeasures = await this._retrieveGenerationByDate(date);
            return diaryMeasures
                .filter(({ ts, ...rest }) => ReeWebRepository._extractYearMonthDay(ts) === date)
                .map(({ ts, ...rest }) => ({ hour: ReeWebRepository._extractHourMinute(ts), measures: { ...rest } }))
                .map(({ hour, measures }) => ({ hour, measure: measures[technology] }));
        } catch (e) {
            const message = `[ReeWebRepository.retrieveGenerationByDate(${date})] ${e}`;
            console.error(message);
            throw message;
        }
    }


    async retrieveGenerationByDateGroupByHour(date) {
        try {
            const diaryMeasures = await this._retrieveGenerationByDate(date);

            const groupByHour = (acc, cur) => {
                const hour = ReeWebRepository._extractHour(cur.hour)

                const item = acc.find(item => item.hour === hour)
                if (item) {
                    for (const i in item.measures) {
                        item.measures[i] += cur.measures[i]
                    }
                } else {
                    acc.push({ hour: hour, measures: cur.measures })
                }
                return acc
            }

            return diaryMeasures
                .filter(({ ts, ...rest }) => ReeWebRepository._extractYearMonthDay(ts) === date)
                .map(({ ts, ...rest }) => ({ hour: ReeWebRepository._extractHourMinute(ts), measures: { ...rest } }))
                .reduce(groupByHour, [])

        } catch (e) {
            console.error(e)
        }
    }

    // async retrieveGenerationByDateAnd(date, hour, technology) {
    //     try {
    //         const url = `https://demanda.ree.es/WSvisionaMovilesPeninsulaRest/resources/demandaGeneracionPeninsula`
    //             + `?callback=angular.callbacks._2&curva=DEMANDA&fecha=${date}`
    //         const response = await fetch(url);
    //         const data0 = await response.text();
    //         const data1 = data0.replace('angular.callbacks._2(', '');
    //         const data2 = data1.replace(');', '');
    //         const data3 = JSON.parse(data2);
    //         const diaryMeasures = data3.valoresHorariosGeneracion;

    //         const extractHourMinute = date => date.substring(11, 16)
    //         const extractHour = date => date.substring(0, 2)
    //         const extractMinute = date => date.substring(3, 5)

    //         const groupByHour = (acc, cur) => {
    //             const hour = extractHour(cur.hour)
    //             const item = acc.find(item => item.hour === hour)
    //             if (item)
    //                 item.value += cur.value
    //             else
    //                 acc.push({ hour: hour, value: cur.value })
    //             return acc
    //         }

    //         return diaryMeasures
    //             .map(({ ts, sol }) => ({ hour: extractHourMinute(ts), value: sol }))
    //             .reduce(groupByHour, [])
    //         // .forEach(data => console.log(data))
    //         // .filter((_, i) => i < 12)

    //     } catch (e) {
    //         console.error(e)
    //     }
    // }
}