export default interface RepositoryInterface<T> {
    retrievePokemons(): Promise<Array<T>>
    retrievePokemonById(pokemonId: number): Promise<T>
}