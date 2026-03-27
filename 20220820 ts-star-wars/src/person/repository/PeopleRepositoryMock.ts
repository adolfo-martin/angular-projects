export type Person = {
    id: number,
    name: string,
}


export default class PeopleRepositoryMock {

    private static _repository = new PeopleRepositoryMock()
    private _people!: Person[]

    private constructor() {
        this._people = [
            {id: 1, name: 'Luke Skywalker'},
            {id: 2, name: 'Leyka Skywalker'},
            {id: 3, name: 'Han Solo'},
            {id: 4, name: 'Chewaka'},
        ]
    }

    static create() {
        return PeopleRepositoryMock._repository
    }

    public getPeople(): Person[] {
        return PeopleRepositoryMock._repository._people
    }

    public getPerson(id: number): Person | undefined {
        return PeopleRepositoryMock._repository._people.find(person => person.id === id)
    }
}