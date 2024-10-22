import { pool } from '../../config/db.js';

export const executeQuery = (query, params, res, successMessage) => {
    console.log('Executing Query:', query, 'with params:', params);
    pool.query(query, params, (error, results) => {
        if (error) {
            console.error('Database Query Error:', error);
            return res.status(500).json({ message: 'Database error', error });
        }
        console.log('Query Results:', results);
        if (successMessage) {
            res.status(201).json({ message: successMessage, data: results });
        } else {
            res.status(200).json(results);
        }
    });
};
