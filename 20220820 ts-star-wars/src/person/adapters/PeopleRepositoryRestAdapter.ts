import Person from "../model/Person.js";
import PeopleRepositoryInterface from "../ports/PeopleRepositoryInterface.js";
import PeopleRepositoryRest from "../repository/PeopleRepositoryRest.js";
import { Person as PersonType } from "../repository/PeopleRepositoryRest.js";

export class PeopleRepositoryRestAdapter implements PeopleRepositoryInterface {
    retrievePerson(id: number): Promise<Person | undefined> {
        throw new Error("Method not implemented.");
    }
    private _repository = PeopleRepositoryRest.create()

    public async retrievePeople(): Promise<Person[]> {
        return (await this._repository.retrievePeople()).map((person: PersonType) => new Person(person.id, person.name))
    }
    
    // public async retrievePerson(id: number): Promise<Person | undefined> {
    //     const person = this._repository.retrievePerson(id)
    //     if (person) {
    //         return new Person(person.id, person.name)
    //     } else {
    //         return undefined
    //     }
    // }
}