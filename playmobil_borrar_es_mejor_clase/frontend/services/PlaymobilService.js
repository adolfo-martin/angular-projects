export default class PlaymobilService {

    // #token;
    

    // set token(value) {
    //     this.#token = value;
    // }


    async getSeries(token) {
        try {
            const url = 'http://127.0.0.1:8082/api/series';
            const data = await this._protectedFetch(url, token);

            if (!data.ok) {
                throw new Error(data.message);
            }
        
            return data.series;
        } catch (error) {
            throw new Error(`Cannot get series: ${error}`);
        }
    }


    async getBoxes(serieUuid, token) {
        try {
            const url = `http://127.0.0.1:8082/api/serie/${serieUuid}/boxes`;
            const data = await this._protectedFetch(url, token);

            if (!data.ok) {
                throw new Error(data.message);
            }

            return data.boxes;
        } catch (error) {
            throw new Error(`Cannot get boxes: ${error}`);
        }
    }


    async _protectedFetch(url, token) {
        try {
            const headers = new Headers();
            headers.append("Authorization", `Bearer ${token}`);
            headers.append("Content-Type", "application/x-www-form-urlencoded");

            var response = await fetch(url, {
                method: 'get',
                headers: headers,
            });
        } catch (error) {
            throw new Error(error.message);
        }

        if (!response.ok) {
            throw new Error(`[${response.status}] ${response.statusText}`);
        }

        try {
            var data = await response.json();
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}