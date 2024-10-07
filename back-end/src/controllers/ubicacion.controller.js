import { pool } from '../db.js';

export const getUbicaciones = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM ubicacion');
        res.json(rows);
    } catch (err) {
        console.error('Error al obtener ubicaciones:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

