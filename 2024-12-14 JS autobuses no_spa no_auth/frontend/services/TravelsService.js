export default class TravelsService {

    async retrieveCities(token) {
        const url = `http://127.0.0.1:3002/api/viajes/ciudades`;

        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            var response = await fetch(url, {
                method: 'get',
                headers
            });
        } catch (error) {
            throw new Error(`Cannot retrieve cities: ${error}`);
        }

        if (!response.ok) {
            throw new Error(`Cannot retrieve cities: [${response.status} ${response.statusText}]`);
        }

        try {
            var data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve cities: ${error}`);
        }

        if (!data.ok) {
            throw new Error(`Cannot retrieve cities: ${data.message}`);
        }

        return data.result.ciudades;
    }


    async retrieveCityByUuid(uuid, token) {
        const url = `http://127.0.0.1:3002/api/viajes/ciudad/${uuid}`;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            var response = await fetch(url, {
                method: 'get',
                headers
            });
        } catch (error) {
            throw new Error(`Cannot retrieve city: ${error}`);
        }

        if (!response.ok) {
            throw new Error(`Cannot retrieve city: [${response.status} ${response.statusText}]`);
        }

        try {
            var data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve city: ${error}`);
        }

        if (!data.ok) {
            throw new Error(`Cannot retrieve city: ${data.message}`);
        }

        return data.result.ciudad;
    }



    async retrieveArrivalCitiesByDepartureCity(departureCityUuid, token) {
        const url = `http://127.0.0.1:3002/api/viajes/ciudades-llegada/ciudad-salida/${departureCityUuid}`;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            var response = await fetch(url, {
                method: 'get',
                headers
            });
        } catch (error) {
            throw new Error(`Cannot retrieve travels: ${error}`);
        }

        if (!response.ok) {
            throw new Error(`Cannot retrieve travels: [${response.status} ${response.statusText}]`);
        }

        try {
            var data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve travels: ${error}`);
        }

        if (!data.ok) {
            throw new Error(`Cannot retrieve travels: ${data.message}`);
        }

        const travelUuids = data.result.ciudades;
        const travels = await Promise.all(
            travelUuids.map(arrivalCityUuid => this.retrieveCityByUuid(arrivalCityUuid, token))
        )

        return travels;

        // const travels = await Promise.all(
        //     travelUuids.map(arrivalCityUuid => this.retrieveTravelsByDepartureTravelAndArrivalTravel(departureCityUuid, arrivalCityUuid, token))
        // )

        // return travels;
    }


    // async retrieveTravelByUuid(uuid, token) {
    //     const url = `http://127.0.0.1:3002/api/travels/travel/${uuid}`;
    //     let response;
    //     try {
    //         const headers = new Headers();
    //         headers.append('Authorization', `Bearer ${token}`);
    //         headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //         response = await fetch(url, {
    //             method: 'get',
    //             headers
    //         });
    //     } catch (error) {
    //         throw new Error(`Cannot retrieve travel: ${error}`);
    //     }

    //     if (!response.ok) {
    //         throw new Error(`Cannot retrieve travel: [${response.status} ${response.statusText}]`);
    //     }

    //     let data;
    //     try {
    //         data = await response.json();
    //     } catch (error) {
    //         throw new Error(`Cannot retrieve travel: ${error}`);
    //     }

    //     if (!data.ok) {
    //         throw new Error(`Cannot retrieve travel: ${data.message}`);
    //     }

    //     return data.result.travel;
    // }


    async retrieveTravelByDepartureCityAndArrivalCity(departureCityUuid, arrivalCityUuid, token) {
        const url = `http://127.0.0.1:3002/api/viajes/trayecto/ciudad-salida/${departureCityUuid}/ciudad-llegada/${arrivalCityUuid}`;
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
            throw new Error(`Cannot retrieve travels: ${error}`);
        }

        if (!response.ok) {
            throw new Error(`Cannot retrieve travels: [${response.status} ${response.statusText}]`);
        }

        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve travels: ${error}`);
        }

        if (!data.ok) {
            throw new Error(`Cannot retrieve travels: ${data.message}`);
        }


        return data.result.trayecto;
    }
}
