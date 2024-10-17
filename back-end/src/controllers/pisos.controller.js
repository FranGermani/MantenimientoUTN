// controllers/pisoController.js
import { pool } from '../../config/db.js';

// Obtener todos los pisos
export const getPisos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM pisos'); // Asegúrate de que la tabla se llame 'pisos'
        res.json(rows);
    } catch (err) {
        console.error('Error al obtener pisos:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Aquí puedes agregar más métodos como crear, actualizar y eliminar pisos
