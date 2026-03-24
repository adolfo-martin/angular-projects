import { concatAll, concatMap, map, of, pluck, zip } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import XMLHttpRequest from 'xhr2'

const pokemons$ = retrievePokemons$()
pokemons$.subscribe(console.log)

function retrievePokemons$() {
    const url = 'https://pokeapi.co/api/v2/pokemon'

    const pokemons$ = ajax({
        url,
        createXHR: () => new XMLHttpRequest(),
    }).pipe(
        pluck('response'),
        pluck('results'),
        concatAll(),
        concatMap(pokemon => 
            zip(
                of(pokemon.name),
                retrievePokemon$(pokemon.url)
            )    
        ),
        map(([name, image]) => ({name, image})),
    )

    return pokemons$ 
}

function retrievePokemon$(url) {
    const pokemon$ = ajax({
        url,
        createXHR: () => new XMLHttpRequest(),
    }).pipe(
        pluck('response'),
        map(pokemon => pokemon.sprites.front_default)
    )

    return pokemon$
}