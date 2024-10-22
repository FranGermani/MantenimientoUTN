import { pool } from '../../config/db.js';

export const getPisos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM piso_nivel');
        res.json(rows);
    } catch (err) {
        console.error('Error al obtener pisos:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
