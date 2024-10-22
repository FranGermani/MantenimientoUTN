import { pool } from '../../config/db.js';

export const getSectores = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM sector');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
