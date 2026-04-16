import mariadb from 'mariadb';

export default class HardwareshopMariadbRepository {

    static #pool = HardwareshopMariadbRepository.#initializeConnection();


    static #initializeConnection() {
        try {
            const pool = mariadb.createPool({
                host: '127.0.0.1',
                user: 'hardwareshop',
                password: 'Hola1234',
                database: 'hardwareshop',
                connectionLimit: 5
            });

            return pool;
        } catch (error) {
            throw error;
        }
    }


    // const res = await connection.query('INSERT INTO myTable value (?, ?)', [1, 'mariadb']);
    // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

    async retrieveSockets() {
        try {
            var connection = await HardwareshopMariadbRepository.#pool.getConnection();
            const records = await connection.query('select * from sockets order by uuid');
            delete records.meta;
            return records;
        } catch (error) {
            throw error;
        } finally {
            if (connection) connection.end();
        }
    }


    async retrieveProcessors() {
        try {
            var connection = await HardwareshopMariadbRepository.#pool.getConnection();
            const records = await connection.query('select * from processors order by uuid');
            delete records.meta;
            return records;
        } catch (error) {
            throw error;
        } finally {
            if (connection) connection.end();
        }
    }


    async retrieveProcessorByUuid(processorUuid) {
        try {
            var connection = await HardwareshopMariadbRepository.#pool.getConnection();
            const records = await connection.query(`select * from processors where uuid = "${processorUuid}"`);
            delete records.meta;
            return records[0];
        } catch (error) {
            throw error;
        } finally {
            if (connection) connection.end();
        }
    }


    async retrieveProcessorsBySocketUuid(socketUuid) {
        try {
            var connection = await HardwareshopMariadbRepository.#pool.getConnection();
            const records = await connection.query(`select * from processors where socket_uuid = "${socketUuid}" order by uuid`);
            delete records.meta;
            return records;
        } catch (error) {
            throw error;
        } finally {
            if (connection) connection.end();
        }
    }


    async retrieveMotherboards() {
        try {
            var connection = await HardwareshopMariadbRepository.#pool.getConnection();
            const records = await connection.query('select * from motherboards order by uuid');
            delete records.meta;
            return records;
        } catch (error) {
            throw error;
        } finally {
            if (connection) connection.end();
        }
    }


    async retrieveMotherboardByUuid(motherboardUuid) {
        try {
            var connection = await HardwareshopMariadbRepository.#pool.getConnection();
            const records = await connection.query(`select * from motherboards where uuid = "${motherboardUuid}"`);
            delete records.meta;
            return records[0];
        } catch (error) {
            throw error;
        } finally {
            if (connection) connection.end();
        }
    }


    async retrieveMotherboardsBySocketUuid(socketUuid) {
        try {
            var connection = await HardwareshopMariadbRepository.#pool.getConnection();
            const records = await connection.query(`select * from motherboards where socket_uuid = "${socketUuid}" order by uuid`);
            delete records.meta;
            return records;
        } catch (error) {
            throw error;
        } finally {
            if (connection) connection.end();
        }
    }
}