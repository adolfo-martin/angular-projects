export function redirectToErrorPage(message) {
    const url = `./error.htm?message=${message}`;
    window.location = url;
}

export function redirectToMoviesPage(genre) {
    const url = `./movies.htm?genre=${genre}`;
    window.location = url;
}