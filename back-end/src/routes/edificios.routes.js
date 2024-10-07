import { Router } from 'express';
import { pool } from '../db.js'; 

const router = Router();

router.get('/edificio', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM edificio WHERE activo = 1');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving edificios' });
    }
});

export default router;
