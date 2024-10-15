// controllers/ubicacionController.js
import { pool } from '../db.js';

// Obtener todas las ubicaciones
export const getUbicaciones = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM ubicacion'); // Asegúrate de que la tabla se llame 'ubicacion'
        res.json(rows);
    } catch (err) {
        console.error('Error al obtener ubicaciones:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Aquí puedes agregar más métodos como crear, actualizar y eliminar ubicaciones
