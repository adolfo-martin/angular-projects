//npm install rxjs
//npm install node-fetch --save

const rxjs = require('rxjs');

//---------------------------------------------
// Stream construido a partir de unos números
// const { of } = require('rxjs');

// const numeros$ = of(1, 2, 3);
// numeros$.subscribe(console.log);

//---------------------------------------------
//Stream construido a partir de un array
// const { from: fromArray } = require('rxjs');

// const numeros$ = fromArray([1, 2, 3]);
// numeros$.subscribe(console.log);

// //---------------------------------------------
// // Stream construido a partir de una promesa asociada a un fetch. Aunque devuelve un array, el stream
// // es solo de un elemento. Para modificar el array hay que hacerlo a través del elemento
// const { from: fromPromise } = require('rxjs');
// const { map } = require('rxjs/operators');
// const fetch = require('node-fetch');

// const url = 'https://restcountries.eu/rest/v2/all';
// const paises$ = fromPromise(fetch(url).then(response => response.json()))
//     .pipe(
//         map(paises => paises.map(
//             ({ alpha3Code: codigo, name: nombre }) => ({ codigo, nombre }))
//         )
//     );
// paises$.subscribe(console.log);

// //---------------------------------------------
// Seguimos con un stream de un único elemento
// //npm install xmlhttprequest
// const { XMLHttpRequest } = require('xmlhttprequest');
// const { from: fromPromise } = require('rxjs');
// const { ajax } = require('rxjs/ajax');
// const { map } = require('rxjs/operators');

// function createXHR() {
//     return new XMLHttpRequest();
// }

// const url = 'https://restcountries.eu/rest/v2/all';

// const extraerJson = ({response: paises}) => paises;

// const cogerCodigoNombre = paises => 
//     paises.map(({ alpha3Code: codigo, name: nombre }) => ({ codigo, nombre }));

// const paises$ = ajax({
//     createXHR,
//     url,
//     method: 'GET',
//     responseType: 'json'
// })
//     .pipe(
//         map(extraerJson),
//         map(cogerCodigoNombre)
//     );
// paises$.subscribe(console.log);

// //---------------------------------------------
// // Flateamos el stream, así que devolvemos un stream de 168 elementos (paises)
// //npm install xmlhttprequest
// const { XMLHttpRequest } = require('xmlhttprequest');
// const { from: fromPromise } = require('rxjs');
// const { ajax } = require('rxjs/ajax');
// const { map, flatMap, filter } = require('rxjs/operators');

// function createXHR() {
//     return new XMLHttpRequest();
// }

// const url = 'https://restcountries.eu/rest/v2/all';

// const extraerJson = ({response: paises}) => paises;

// const cogerCodigoNombre = ({ alpha3Code: codigo, name: nombre }) => ({ codigo, nombre });

// const paises$ = ajax({
//     createXHR,
//     url,
//     method: 'GET',
//     responseType: 'json'
// })
//     .pipe(
//         map(extraerJson),
//         flatMap(paises => paises),
//         map(cogerCodigoNombre),
//         filter(({codigo}) => codigo.localeCompare('ESP') === 0)
//     );

// const subscripcion = paises$.subscribe({
//     next: console.log,
//     error: _ => console.error('ERROR'),
//     complete: _ => subscripcion.unsubscribe()
// });

// //---------------------------------------------
// // Devolvemos el nombre en español también los paises con los que hace frontera, y filtramos a España
// //npm install xmlhttprequest
// const { XMLHttpRequest } = require('xmlhttprequest');
// const { from: fromPromise } = require('rxjs');
// const { ajax } = require('rxjs/ajax');
// const { map, flatMap, filter } = require('rxjs/operators');

// function createXHR() {
//     return new XMLHttpRequest();
// }

// const url = 'https://restcountries.eu/rest/v2/all';

// const extraerJson = ({response: paises}) => paises;

// const cogerCodigoNombreEspanolFronteras = 
//     ({ alpha3Code: codigo, translations: { es: nombre}, borders: fronteras }) => 
//         ({ codigo, nombre, fronteras });

// const paises$ = ajax({
//     createXHR,
//     url,
//     method: 'GET',
//     responseType: 'json'
// })
//     .pipe(
//         map(extraerJson),
//         flatMap(paises => paises),
//         map(cogerCodigoNombreEspanolFronteras),
//         filter(({codigo}) => codigo.localeCompare('ESP') === 0)
//     );

// const subscripcion = paises$.subscribe({
//     next: console.log,
//     error: _ => console.error('ERROR'),
//     complete: _ => subscripcion.unsubscribe()
// });

// //---------------------------------------------
// // Devolvemos el nombre en español también los paises con los que hace frontera, filtramos a España,
// // y mostramos los nombres de los paises frontera con nuevas llamadas AJAX
// //npm install xmlhttprequest
// const { XMLHttpRequest } = require('xmlhttprequest');
// const { zip } = require('rxjs');
// const { ajax } = require('rxjs/ajax');
// const { map, flatMap, filter, mergeMap } = require('rxjs/operators');

// function createXHR() {
//     return new XMLHttpRequest();
// }

// const url = 'https://restcountries.eu/rest/v2/all';
// const urlPais = 'https://restcountries.eu/rest/v2/alpha/';

// const extraerJson = ({ response: data }) => data;

// const cogerCodigoNombreEspanolFronteras =
//     ({ alpha3Code: codigo, translations: { es: nombre }, borders: fronteras }) =>
//         ({ codigo, nombre, fronteras });

// const cogerNombreEspanol = ({translations: {es: nombre}}) => nombre;

// const obtenerNombresPaisesFrontera$ = 
//     ({fronteras: fronterasCodigo, ...resto}) => {
//         const fronterasNombre = fronterasCodigo.map(codigo => {
//             const url = `${urlPais}${codigo}`;
//             const frontera$ = ajax({createXHR, url})
//                 .pipe(
//                     map(extraerJson),
//                     map(cogerNombreEspanol)   
//                 );
//             return frontera$;
//         })
//         return zip(...fronterasNombre)
//             .pipe(
//                 map(fronteras => ({...resto, fronteras}))
//             );
//     };

// const paises$ = ajax({
//     createXHR,
//     url,
//     method: 'GET',
//     responseType: 'json'
// }).pipe(
//     map(extraerJson),
//     flatMap(paises => paises),
//     map(cogerCodigoNombreEspanolFronteras),
//     filter(({ codigo }) => codigo.localeCompare('ESP') === 0),
//     mergeMap(obtenerNombresPaisesFrontera$)
// );

// const subscripcion = paises$.subscribe({
//     next: console.log,
//     //next: _ => console.log(),
//     //error: _ => console.error('ERROR'),
//     error: console.error,
//     complete: _ => subscripcion.unsubscribe()
// });


//---------------------------------------------
// Devolvemos el nombre en español también los paises con los que hace frontera, 
// y mostramos los nombres de los paises frontera con nuevas llamadas AJAX
//Quitamos el filtro y hacemos que aparezca un pais cada 5 segundos
//npm install xmlhttprequest
const { XMLHttpRequest } = require('xmlhttprequest');
const { zip, interval } = require('rxjs');
const { ajax } = require('rxjs/ajax');
const { map, flatMap, concatMap, take, delay } = require('rxjs/operators');

function createXHR() {
    return new XMLHttpRequest();
}

const url = 'https://restcountries.eu/rest/v2/all';
const urlPais = 'https://restcountries.eu/rest/v2/alpha/';

const extraerJson = ({ response: data }) => data;

const cogerCodigoNombreEspanolFronteras =
    ({ alpha3Code: codigo, translations: { es: nombre }, borders: fronteras }) =>
        ({ codigo, nombre, fronteras });

const cogerNombreEspanol = ({ translations: { es: nombre } }) => nombre;

const obtenerNombresPaisesFrontera$ =
    ({ fronteras: fronterasCodigo, ...resto }) => {
        const fronterasNombre = fronterasCodigo.map(codigo => {
            const url = `${urlPais}${codigo}`;
            const frontera$ = ajax({ createXHR, url })
                .pipe(
                    map(extraerJson),
                    map(cogerNombreEspanol)
                );
            return frontera$;
        })
        return zip(...fronterasNombre)
            .pipe(
                map(fronteras => ({ ...resto, fronteras }))
            );
    };

const paises$ = ajax({
    createXHR,
    url,
    method: 'GET',
    responseType: 'json'
}).pipe(
    map(extraerJson),
    flatMap(paises => paises),
    map(cogerCodigoNombreEspanolFronteras),
    concatMap(obtenerNombresPaisesFrontera$)
);

const temporizador$ = interval(3000);

const mostrarPaisCadaIntervalo$ =
    zip(temporizador$, paises$)
        .pipe(
            take(3),
            map(([tiempo, pais]) => pais)
        );

const subscripcion = mostrarPaisCadaIntervalo$.subscribe({
    next: console.log,
    error: console.error,
    complete: _ => subscripcion.unsubscribe()
});