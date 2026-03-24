export function showUserFullname() {
    const token = window.sessionStorage.getItem('token-travelsbooking');
    if (!token) {
        alert('El usuario no ha sido autenticado.');
        window.location.href = './index.html';
    }

    try {
        const fullname = extractFullnameFromToken(token);
        const nSpan = document.querySelector('#tSpnFullname');
        nSpan.textContent = fullname;
    } catch (error) {
        alert(`El usuario no ha sido autenticado. ${error}`);
        window.location.href = './index.html'
    }
}


export function extractFullnameFromToken(token) {
    const decodedToken = decodeToken(token);

    if (!decodedToken.firstname || !decodedToken.lastname) {
        throw new Error('Token has not full name.')
    }

    return `${decodedToken.firstname} ${decodedToken.lastname}`;

    function decodeToken(token) {
        const parseJwt = token => {
            try {
                return JSON.parse(atob(token.split('.')[1]));
            } catch (error) {
                throw new Error(`Problem decoding token "${token}": ${error}.`);
            }
        }
        const tokenDecodificado = parseJwt(token);
        return tokenDecodificado;
    }
}