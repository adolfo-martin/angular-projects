// src/models/index.js

const connection = require('../config/database');

const createItem = (itemData) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO items SET ?';
        connection.query(query, itemData, (error, results) => {
            if (error) return reject(error);
            resolve(results.insertId);
        });
    });
};

const updateItem = (id, itemData) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE items SET ? WHERE id = ?';
        connection.query(query, [itemData, id], (error, results) => {
            if (error) return reject(error);
            resolve(results.affectedRows);
        });
    });
};

const deleteItem = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM items WHERE id = ?';
        connection.query(query, id, (error, results) => {
            if (error) return reject(error);
            resolve(results.affectedRows);
        });
    });
};

module.exports = {
    createItem,
    updateItem,
    deleteItem
};