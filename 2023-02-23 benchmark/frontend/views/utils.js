export function showUserFullnameAndDirection(token) {
    try {
        const { fullname, direction } = extractFullnameAndDirectionFromToken(token);
        document.querySelector('#tSpnFullname').textContent = fullname;
        document.querySelector('#tSpnDirection').textContent = direction;
    } catch (error) {
        alert(`${error.message}`);
        window.location.href = './index.htm'
    }
}



export function extractFullnameAndDirectionFromToken(token) {
    const decodedToken = decodeToken(token);

    if (!decodedToken.firstname || !decodedToken.lastname) {
        throw new Error('Token has not full name.')
    }

    if (!decodedToken.direction) {
        throw new Error('Token has not full name.')
    }

    return { 
        fullname: `${decodedToken.firstname} ${decodedToken.lastname}`,
        direction: decodedToken.direction,
    };

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