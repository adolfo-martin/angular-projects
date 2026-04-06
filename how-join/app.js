import XMLHttpRequest from 'xhr2'
import { from, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, pluck, mergeMap, take, combineAll, concatMap, concatAll } from 'rxjs/operators'

const url = 'https://restcountries.com/v2/all'

const countries$ = ajax({
    url,
    createXHR: () => new XMLHttpRequest(),
}).pipe(
    pluck('response'),
    mergeMap(country => country),
    take(1),
    map(({ name, borders }) => ({ name, borders })),

    zip(

    )
    concatMap(({ name, borders }) => from(borders).pipe(
        map(border =>
            ajax({
                url: `https://restcountries.com/v2/alpha/${border}`,
                createXHR: () => new XMLHttpRequest(),
            }).pipe(
                pluck('response'),
                pluck('name'),
            )
        )
    )),


    combineAll(),
)

countries$.subscribe(console.log)


    // map(({ name, borders }) =>
    //     of({ name, borders })
    // ),