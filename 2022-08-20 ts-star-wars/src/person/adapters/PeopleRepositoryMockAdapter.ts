import Person from "../model/Person.js";
import PeopleRepositoryInterface from "../ports/PeopleRepositoryInterface.js";
import PeopleRepositoryMock from "../repository/PeopleRepositoryMock.js";

export class PeopleRepositoryMockAdapter implements PeopleRepositoryInterface {
    private _repository = PeopleRepositoryMock.create()

    public async retrievePeople(): Promise<Person[]> {
        return this._repository.getPeople().map(person => new Person(person.id, person.name))
    }
    
    public async retrievePerson(id: number): Promise<Person | undefined> {
        const person = this._repository.getPerson(id)
        if (person) {
            return new Person(person.id, person.name)
        } else {
            return undefined
        }
    }
}