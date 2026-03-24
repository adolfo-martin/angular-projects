import { post } from './utils.js';

export default class AuthenticationService {

    static _SERVER_URL = 'http://authentication-server.d6cjf7gdayfxaham.francecentral.azurecontainer.io';

    async validateUserAndRetrieveToken(username, password) {
        const url = `${AuthenticationService._SERVER_URL}/api/login_user`;
        const errorMessage = 'Cannot validate user';

        const data = await post(url, {username, password}, errorMessage);

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`${errorMessage}: ${data.message}`);
        }

        return data.accessToken;
    }

    // async validateUserAndRetrieveToken(username, password) {
    //     const url = `http://${AuthenticationService._SERVER_URL}/api/login_user`;

    //     let response;
    //     try {
    //         response = await fetch(url, {
    //             method: 'post',
    //             headers: {
    //                 'content-type': 'application/json',
    //                 'accept': 'application/json'
    //             },
    //             body: JSON.stringify({ username, password })
    //         });
    //     } catch (error) {
    //         throw new Error(`Cannot validate user: ${error}`);
    //     }

    //     // Comprueba si el fetch fue correcto
    //     if (!response.ok) {
    //         throw new Error(`Cannot validate user: [${response.status} ${response.statusText}]`);
    //     }

    //     // Comprueba si estoy recibiendo JSON
    //     let data;
    //     try {
    //         data = await response.json();
    //     } catch (error) {
    //         throw new Error(`Cannot validate user: ${error}`);
    //     }

    //     // Comprueba si el data es correcto
    //     if (!data.ok) {
    //         throw new Error(`Cannot validate user: ${data.message}`);
    //     }

    //     return data.accessToken;
    // }


    decodeToken(token) {
        const parseJwt = token => {
            try {
                return JSON.parse(atob(token.split('.')[1]));
            } catch (error) {
                throw new Error(`Problem decoding token "${token}": ${error.message}.`);
            }
        }
        const tokenDecodificado = parseJwt(token);
        return tokenDecodificado;
    }

}