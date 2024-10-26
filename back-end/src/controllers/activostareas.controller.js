import { pool } from '../../config/db.js'; 

export const getactivotareas = async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT a.nombre AS nombre_activo, at.id_activo, t.descripcion
            FROM activo_tarea at
            JOIN tareas t ON at.id_tarea = t.id_tarea
            JOIN activo a ON at.id_activo = a.id_activo
            `);
        res.json(rows);
    } catch (err) {
        console.error('Error al obtener tareas de activo:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


