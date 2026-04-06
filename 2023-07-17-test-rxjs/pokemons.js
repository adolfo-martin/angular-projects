import { ajax } from 'rxjs/ajax';
import { map, switchMap, zip } from 'rxjs';
import XMLHttpRequest from 'xhr2';


retrievePokemons$('https://pokeapi.co/api/v2/pokemon').subscribe(console.log);


function retrievePokemonsFromUrl$(url) {
    return ajax({
        url,
        createXHR: () => new XMLHttpRequest()
    }).pipe(
        map(({ response }) => response),
        map(({ next, results }) => {
            if (next) {

            } else {
                return results;
            }
        }),
    );
}



// function retrievePokemons$() {
//     return ajax({
//         url: 'https://pokeapi.co/api/v2/pokemon',
//         createXHR: () => new XMLHttpRequest()
//     }).pipe(
//         map(({ response }) => response),
//         map(({ results }) => results),
//         map(pokemons => pokemons.map(({ url }) => retrievePokemon$(url))),
//         switchMap(pokemons$ => zip(...pokemons$))
//     );
// }


// function retrievePokemon$(url) {
//     return ajax({
//         url,
//         createXHR: () => new XMLHttpRequest()
//     }).pipe(
//         map(({ response }) => response),
//         map(({ name, weight, height, sprites }) => ({ name, weight, height, image: sprites.front_default })),
//     );
// }
