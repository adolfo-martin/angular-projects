import { User } from '../models/user.js';

export class AuthService {

    static #BASE_URL = 'https://dummyjson.com';

    /**
     * 
     * @param {string} username 
     * @param {string} password
     * @returns { {user: User, token: string} }
     */
    async validateUser(username, password) {
        try {
            const url = AuthService.#BASE_URL + '/auth/login';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            /** @type { {id: number, username: string, firstName: string, lastName: string, accessToken: string} } */
            const {id, firstName, lastName, accessToken: token} = await response.json();
            const user = new User(id, username, firstName, lastName);
            return {user, token};
        } catch (error) {
            throw new AuthServiceException('[AuthService.validateUser] cause: ' + error.message);
        }
    }
}


export class AuthServiceException extends Error {
    /**
     * 
     * @param {string} message about the which causing the throwing of the exception.
     */
    constructor(message) {
        super('[AuthServiceException] cause: ' + message);
    }
}