import Person from "../model/Person.js";

export default interface PeopleRepositoryInterface {
    retrievePeople(): Promise<Person[]>
    retrievePerson(id: number): Promise<Person | undefined>
}