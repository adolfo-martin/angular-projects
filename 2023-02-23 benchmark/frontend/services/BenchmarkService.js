export default class BenchmarkService {
    async retrieveSockets(token) {
        const url = 'http://127.0.0.1:48711/rest/sockets';

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            response = await fetch(url, {
                method: 'get',
                headers
            });
        } catch (error) {
            throw new Error(`Cannot retrieve sockets: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve sockets: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve sockets: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve sockets: ${data.message}`);
        }

        return data.information.sockets;
    }


    async retrieveProcessorsBySocketAndCores(socketId, coresQuantity, token) {
        const url = `http://127.0.0.1:48711/rest/socket/${socketId}/cores/${coresQuantity}/processors`;

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            response = await fetch(url, {
                method: 'get',
                headers
            });
        } catch (error) {
            throw new Error(`Cannot retrieve processors: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve processors: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve processors: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve processors: ${data.message}`);
        }

        return data.information.processors;
    }


    async retrieveProcessorById(processorId, token) {
        const url = `http://127.0.0.1:48711/rest/processor/${processorId}`;

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            response = await fetch(url, {
                method: 'get',
                headers
            });
        } catch (error) {
            throw new Error(`Cannot retrieve processor: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve processor: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve processor: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve processor: ${data.message}`);
        }

        return data.information.processor;
    }
}