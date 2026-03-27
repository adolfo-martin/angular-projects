// src/controllers/index.js

const db = require('../config/database');

const controllers = {
    getAllRecords: (table) => async (req, res) => {
        try {
            const [rows] = await db.promise().query(`SELECT * FROM ${table}`);
            res.json(rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getRecordById: (table, idField) => async (req, res) => {
        try {
            const [rows] = await db.promise().query(
                `SELECT * FROM ${table} WHERE ${idField} = ?`,
                [req.params.id]
            );
            if (rows.length === 0) {
                return res.status(404).json({ message: 'Record not found' });
            }
            res.json(rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getCompositeRecord: (table, fields) => async (req, res) => {
        try {
            const conditions = fields.map(field => `${field} = ?`).join(' AND ');
            const values = fields.map(field => req.params[field]);
            
            const [rows] = await db.promise().query(
                `SELECT * FROM ${table} WHERE ${conditions}`,
                values
            );
            if (rows.length === 0) {
                return res.status(404).json({ message: 'Record not found' });
            }
            res.json(rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = controllers;