// controllers/sector.controller.js
import { pool } from '../db.js';

// Función para obtener todos los sectores
export const getSectores = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM sector'); // Cambia "sector" según el nombre real de tu tabla
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
