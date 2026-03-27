import { iif, map, of, switchMap, zip, take, from, concatMap, toArray } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import XMLHttpRequest from 'xhr2'

class PokemonsService {

    retrieve20Pokemons$(url) {
        return ajax({
            url, 
            method: 'get',
            createXHR: () => new XMLHttpRequest(),
        }).pipe(
            map(({ response }) => response),
            map(({ next, results }) => ({ nextUrl: next, results })),
            switchMap(({ nextUrl, results }) => iif (
                () => nextUrl === null,
                of(results),
                zip(
                    this.retrieve20Pokemons$(nextUrl),
                    of(results)
                ).pipe(
                    switchMap(([firstPokemons, lastPokemons]) => of([...firstPokemons, ...lastPokemons]))
                )
            )),
        )
    }


    retrievePokemonNameHeightWeight$(url) {
        return ajax({
            url, 
            method: 'get',
            createXHR: () => new XMLHttpRequest(),
        }).pipe(
            map(({ response }) => response),
            map(({ name, height, weight, sprites }) => ({ name, height, weight, image: sprites.front_default })),
        )
    }
}


const service = new PokemonsService()
service.retrieve20Pokemons$('https://pokeapi.co/api/v2/pokemon')
    .pipe(
        switchMap(pokemons => from(pokemons)),
        // take(50),
        concatMap(({ url }) => service.retrievePokemonNameHeightWeight$(url)),
        toArray(),
    ).subscribe(console.log)