import { Some, None } from './Maybe.js';
import Person from './Person.js';

export default class StarwarsService {
    static BASE_URl = 'https://swapi.dev/api';

    async getPeople() {
        try {
            var response = await fetch(`${StarwarsService.BASE_URl}/people`);
        } catch (error) {
            return new None(error.message);
        }
        if (!response.ok) {
            return new None(response.statusText);
        }
        try {
            var data = await response.json();
        } catch (error) {
            return new None(error.message);
        }
        const people = data.results.map(person => new Person(person.url.split('/')[5] , person.name));
        return new Some(people);
    }
    

    async getPersonById(id) {
        try {
            const response = await fetch(`${StarwarsService.BASE_URl}/people/${id}`);
        } catch (error) {
            return new None(error.message);
        }
        if (!response.ok) {
            return new None(response.statusText);
        }
        try {
            const data = await response.json();
        } catch (error) {
            return new None(error.message);
        }
        const person = new Person(data.id, data.name, data.height, data.mass);
        return new Some(person);
    }
}