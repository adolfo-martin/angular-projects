import { Some } from "./Maybe.js";
import StarwarsService from "./StarwarsService.js";

const service = new StarwarsService();

(new Some('0'))
    .thenn(await service.getPeople)
    // .thenn(async (people) => people.find(person => person.id === '1'))
    // .thenn(getPeopleDetails)
    .thenn(async (people) => { 
        console.log(people);
        return people;
    })
    // .catchh(async (people) => { 
    //     console.log(people);
    //     return people;
    // });


async function getPeopleDetails(people) {
    const result = [];

    for (const person of people) {
        const personFull = await service.getPersonById(person.id);
        result.push(personFull);
    }

    return result;
}