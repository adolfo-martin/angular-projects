import { ajax } from 'rxjs/ajax'
import { tap, map, switchMap, concatMap, from, toArray, groupBy, zip, of, take, iif, mergeMap } from 'rxjs'
import XMLHttpRequest from 'xhr2'
import Person from './Person.js'


export default class StarWarsService {

    retrievePeople$() {
        return ajax({
            url: 'https://swapi.dev/api/people/',
            method: 'get',
            createXHR: () => new XMLHttpRequest(),
        }).pipe(
            map(({ response }) => response),
            map(({ results }) => results),
            switchMap(people => from(people)),
            // take(2),
            concatMap(person => this.retrievePerson$(person.url)),
            concatMap(person => zip(
                of(person),
                this.retrievePlanetByUrl(person.planet)
            )),
            map(([ person, planetName ]) => { person.planet = planetName; return person }),
            toArray(),
        )
    }


    retrievePerson$(url) {
        return ajax({
            url,
            method: 'get',
            createXHR: () => new XMLHttpRequest(),
        }).pipe(
            map(({ response }) => response),
            map(person => new Person(person.name, person.height, person.mass, person.gender, person.homeworld)),
        )
    }


    groupByGender$(people$) {
        return people$.pipe(
            // @ts-ignore
            switchMap(people => from(people)),
            // @ts-ignore
            groupBy(person => person.gender),
            mergeMap(group => zip(
                of(group.key),
                group.pipe(toArray())
            )),
            map(([ gender, people ]) => ({ gender, people: people }))
        )
    }


    retrievePlanetByUrl(url) {
        return ajax({
            url,
            method: 'get',
            createXHR: () => new XMLHttpRequest(),
        }).pipe(
            map(({ response }) => response),
            map(({ name }) => name)
        )
    }


    retrieve20Planets$(url) {
        if (url === null) {
            return of([]);
        }

        return ajax({
            url,
            method: 'get',
            createXHR: () => new XMLHttpRequest(),
        }).pipe(
            map(({ response }) => response),
            switchMap(({ next, results }) => iif(
                () => next === null,
                of(results).pipe(planets => planets.map(planet => planet.name)),
                zip(
                    of(results).pipe(planets => planets.map(planet => planet.name)),
                    this.retrieve20Planets$(next).pipe()
                )
            )),
            tap(console.log),
            map(([results, nextPlanets]) => [...results, ...nextPlanets]),
            switchMap(planets => from(planets)),
            map(planet => planet.name),
            toArray(),
        )
    }


    retrievePlanets$() {
        return this.retrieve20Planets$('https://swapi.dev/api/planets/')            
    }
}