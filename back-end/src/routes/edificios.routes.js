import { Router } from 'express';
import { pool } from '../db.js'; // Asegúrate de que la ruta sea correcta

const router = Router();

// GET /api/edificio - Obtener todos los edificios
router.get('/edificio', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM edificio WHERE activo = 1'); // Cambia la consulta si necesitas filtrar
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving edificios' });
    }
});

export default router;
