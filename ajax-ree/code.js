
const repairData = data => data.replace('angular.callbacks._6(', '')
export function showData() {
    const url = 'https://demanda.ree.es/WSvisionaMovilesPeninsulaRest/resources/demandaGeneracionPeninsula?callback=angular.callbacks._6&curva=DEMANDA&fecha=2021-11-19';


    // // fetch(url, { mode: 'no-cors' })
    // //     .then(response => response.json())

    fetch(url, { mode: 'no-cors' })
        .then(response => response.json())
        .then(console.log)

}


