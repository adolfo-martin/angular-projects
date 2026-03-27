import Person from "./Person.js";

export default class StarwarsService {
    /**
     * 
     * @returns Array of people objects of type services/Person.
     */
    async getPeople() {
        let url = 'https://swapi.dev/api/people';
        let nextPeople;
        const people = [];

        while (url) {
            ({ nextUrl: url, nextPeople } = await get20PeopleAndNextUrl(url));
            people.push(...nextPeople);
            break;
        }
        
        return people;

        async function get20PeopleAndNextUrl(url) {
            if (!url) {
                return [];
            }
            
            const response = await fetch(url);
            const data = await response.json();
            
            const nextUrl = data.next;
            const peopleRaw = data.results;
            const nextPeople = peopleRaw.map(person =>
                new Person(person.url.split('/')[5], person.name)
            );
            return { nextUrl, nextPeople };
        }
    }


    async getPersonById(id) {
        const response = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await response.json();
        const person = new Person(data.url.split('/')[5], data.name);
        person.height = data.height;
        person.weight = data.mass;
        return person;
    }
}