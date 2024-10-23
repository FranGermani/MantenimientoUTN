// controllers/ubicacionController.js
import { pool } from '../../config/db.js';

// Obtener todas las ubicaciones
export const getUbicaciones = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM ubicacion');
        res.json(rows);
    } catch (err) {
        console.error('Error al obtener ubicaciones:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Crear una nueva ubicación
export const createUbicacion = async (req, res) => {
    const { nombre, labeltag, activo } = req.body; // Capturamos los campos desde el body
    try {
        const [result] = await pool.query('INSERT INTO ubicacion (nombre, labeltag, activo) VALUES (?, ?, ?)', 
        [nombre, labeltag, activo || 1]); // Si no se envía "activo", por defecto es 1 (activa)
        
        res.status(201).json({ 
            message: 'Ubicación creada exitosamente', 
            id: result.insertId 
        });
    } catch (err) {
        console.error('Error al crear ubicación:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


// Eliminar (físicamente) una ubicación
export const deleteUbicacion = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await pool.query('DELETE FROM ubicacion WHERE id_ubicacion = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Ubicación no encontrada' });
        }

        res.json({ message: 'Ubicación eliminada exitosamente' });
    } catch (err) {
        console.error('Error al eliminar ubicación:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

