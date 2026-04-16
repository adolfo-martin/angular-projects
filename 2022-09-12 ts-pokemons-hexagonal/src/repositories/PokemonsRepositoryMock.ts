type Pokemon = {
    id: number,
    name: string,
    height: number,
    weight: number,
}

export default class PokemonsRepositoryMock {
    private static _repository: PokemonsRepositoryMock;

    private constructor() {}

    public static create(): PokemonsRepositoryMock {
        if (!PokemonsRepositoryMock._repository) {
            PokemonsRepositoryMock._repository = new PokemonsRepositoryMock()
        }
        return PokemonsRepositoryMock._repository
    }

    public getAllPokemons(): Map<number, Pokemon> {
        return PokemonsRepositoryMock.pokemons;
    }

    private static pokemons = new Map<number, Pokemon>([
        [1, { id: 1, name: 'Pikachu', height: 11, weight: 45 }],
        [2, { id: 2, name: 'Bulbasur', height: 17, weight: 83 }],
        [3, { id: 3, name: 'Adomur', height: 13, weight: 28 }],
    ])
}