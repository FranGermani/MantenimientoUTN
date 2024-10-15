// controllers/activotareas.controller.js
import { pool } from '../db.js'; // Asegúrate de que la ruta a tu archivo de conexión a la base de datos es correcta

// Obtener todas las tareas de activo
export const getactivotareas = async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT a.nombre AS nombre_activo, at.id_activo, t.descripcion
            FROM activo_tarea at
            JOIN tareas t ON at.id_tarea = t.id_tarea
            JOIN activo a ON at.id_activo = a.id_activo
            WHERE at.id_activo BETWEEN 1 AND 10;
        `); // Consulta para obtener tareas de los activos del 1 al 10
        res.json(rows); // Devuelve los registros en formato JSON
    } catch (err) {
        console.error('Error al obtener tareas de activo:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


// Aquí puedes agregar más métodos como crear, actualizar y eliminar tareas
