// import { fetch } from '../../../node_modules/node-fetch/src/index.js'
// @ts-ignore
import fetch from '../../../node_modules/node-fetch/src/index.js'
// import { fetch } from '../../../node_modules/node-fetch/src/index.js'

export type Person = {
    id: number,
    name: string,
}

export default class PeopleRepositoryRest {
    private static _BASE_URL = 'https://swapi.dev/api'
    private static _repository = new PeopleRepositoryRest()

    private constructor() {}

    public static create() {
        return PeopleRepositoryRest._repository
    }

    public async retrievePeople(): Promise<Person[]> {
        const url = `${PeopleRepositoryRest._BASE_URL}/people`
        const response = await fetch(url)
        const data = await response.json()

        const people: Person[] = data.results.map((person: {name: string, url: string}) => {
            const id = parseInt(person.url.replace('https://swapi.dev/api/people/', '').replace('/', ''))
            const name = person.name
            return {id , name}
        })
        return people
    }
    
    public async retrievePerson(id: number): Promise<Person | undefined> {
        throw new Error("Method not implemented.");
    }
}