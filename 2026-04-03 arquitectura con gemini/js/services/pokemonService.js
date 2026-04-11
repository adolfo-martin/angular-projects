const BASE_URL = 'https://pokeapi.co/api/v2';

export const PokemonService = {
    // Obtener lista de pokemons (por defecto los primeros 20)
    async getAll(limit = 20, offset = 0) {
        const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
        if (!response.ok) throw new Error('Error al cargar pokemons');
        return await response.json();
    },

    // Obtener detalle de un pokemon por nombre o ID
    async getOne(nameOrId) {
        const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
        if (!response.ok) throw new Error('Pokemon no encontrado');
        return await response.json();
    }
};
