// controllers/activo.controller.js
import { pool } from '../../config/db.js';

// Obtener todos los activos
export const getActivos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM activo');
        res.json(rows);
    } catch (err) {
        console.error('Error al obtener los activos:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Crear un nuevo activo
export const createActivo = async (req, res) => {
    const { nombre, tag_diminutivo, disponibilidad } = req.body;
    try {
        const [result] = await pool.query('INSERT INTO activo (nombre, tag_diminutivo, disponibilidad) VALUES (?, ?, ?)', [nombre, tag_diminutivo, disponibilidad || 1]);
        res.json({ id: result.insertId, nombre, tag_diminutivo, disponibilidad });
    } catch (err) {
        console.error('Error al crear el activo:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Actualizar un activo existente
export const updateActivo = async (req, res) => {
    const { id } = req.params;
    const { nombre, tag_diminutivo, disponibilidad } = req.body;
    try {
        await pool.query('UPDATE activo SET nombre = ?, tag_diminutivo = ?, disponibilidad = ? WHERE id_activo = ?', [nombre, tag_diminutivo, disponibilidad, id]);
        res.json({ id, nombre, tag_diminutivo, disponibilidad });
    } catch (err) {
        console.error('Error al actualizar el activo:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Eliminar un activo
export const deleteActivo = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM activo WHERE id_activo = ?', [id]);
        res.json({ message: 'Activo eliminado' });
    } catch (err) {
        console.error('Error al eliminar el activo:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
