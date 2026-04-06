export async function retrieveGenres() {
    try {
        const url = 'http://localhost/videoclub/controlador.php?accion=conseguir_generos';
        const response = await fetch(url);
        if (!response.ok) {
            throw response.statusText;
        }
        const data = await response.json();
        const genres = data.resultado.generos;
        return genres;
    } catch (error) {
        throw `Cannot retrieve the genres: ${error}`
    }
}


export async function retrieveMoviesByGenre(genre) {
    try {
        const url = `http://localhost/videoclub/controlador.php?accion=conseguir_peliculas&genero=${genre}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw response.statusText;
        }
        const data = await response.json();
        const movies = data.resultado.peliculas;
        return movies;
    } catch (error) {
        throw `Cannot retrieve the movies of genre ${genre}: ${error}`
    }
}


export async function retrievePersonById(personId) {
    try {
        const url = `http://localhost/videoclub/controlador.php?accion=conseguir_persona&persona=${personId}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw response.statusText;
        }
        const data = await response.json();
        const persona = data.resultado.persona;
        return persona;
    } catch (error) {
        throw `Cannot retrieve the person with id ${personId}: ${error}`
    }
}