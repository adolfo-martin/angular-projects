import { concat, Observable, take, switchMap, from, map, concatAll } from 'rxjs'
import { ajax } from 'rxjs/ajax'
// @ts-ignore
import XMLHttpRequest from 'xhr2'

const url = 'https://restcountries.com/v2/all';

const countries$ = ajax({
    url,
    createXHR: () => new XMLHttpRequest()
}).pipe(
    // @ts-ignore
    map(data => data.response),
    // @ts-ignore
    concatAll(),
    take(1),

)

countries$.subscribe(console.log)

    // switchMap(countries => from(countries)),