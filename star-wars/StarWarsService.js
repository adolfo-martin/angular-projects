import { map, switchMap, from, toArray, groupBy, mergeMap, zip, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import XMLHttpRequest from 'xhr2';
import Person from './Person.js';


export default class StarWarsService {

    retrievePeople$() {
        return this.retrieve10People$('https://swapi.dev/api/people/');
    }


    retrieve10People$(url) {
        return ajax({
            url,
            method: 'get',
            createXHR: () => new XMLHttpRequest(),
        }).pipe(
            map(({ response }) => response),
            switchMap(({ next, results }) => iif(
                () => next === null,
                of(results).pipe(people => people.map(people => people.name)),
                zip(
                    of(results).pipe(planets => planets.map(planet => planet.name)),
                    this.retrieve10People$(next).pipe()
                )
            )),
            map(({ results }) => results),
            switchMap(people => from(people)),
            map(({ name, height, gender }) => new Person(name, height, gender)),
            toArray(),
        );
    }


    retrievePeopleGroupByGender$() {
        return this.retrievePeople$().pipe(
            switchMap(people => from(people)),
            groupBy(person => person.gender),
            mergeMap(group => zip(
                of(group.key),
                group.pipe(toArray())
            )),
            map(([ gender, people ]) => ({ gender, people: people })),
            toArray(),
        )
    }

}