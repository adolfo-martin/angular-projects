import { PeopleRepositoryMockAdapter } from "./person/adapters/PeopleRepositoryMockAdapter.js";
import { PeopleRepositoryRestAdapter } from "./person/adapters/PeopleRepositoryRestAdapter.js";
import PeopleRepositoryInterface from "./person/ports/PeopleRepositoryInterface.js";


// const repository: PeopleRepositoryInterface = new PeopleRepositoryMockAdapter()
const repository: PeopleRepositoryInterface = new PeopleRepositoryRestAdapter()


async function run() {
    console.log(await repository.retrievePeople())
    // console.log(await repository.retrievePerson(1));
    // console.log(await repository.retrievePerson(5));
}

run()