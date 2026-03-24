export default class AuthenticationService {

    async validateUsernameAndPasswordAndRetrieveToken(username, password) {
        const url = `http://127.0.0.1:3001/api/authentication/validate_user`;

        try {
            var response = await fetch(url, {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
        } catch (error) {
            throw new Error(`Cannot validate user: ${error}`);
        }

        if (!response.ok) {
            throw new Error(`Cannot validate user: [${response.status} ${response.statusText}]`);
        }

        try {
            var data = await response.json();
        } catch (error) {
            throw new Error(`Cannot validate user: ${error}`);
        }

        if (!data.ok) {
            throw new Error(`Cannot validate user: ${data.message}`);
        }

        return data.accessToken;
    }
}