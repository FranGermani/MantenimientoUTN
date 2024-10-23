// controllers/sector.controller.js
import { pool } from '../../config/db.js';

// Función para obtener todos los sectores
export const getSectores = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM sector'); 
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Crear un nuevo sector
export const createSector = async (req, res) => {
    const { nombre, descripcion, activo } = req.body;


    if (!nombre) {
        return res.status(400).json({ message: 'El nombre del sector es obligatorio' });
    }

    try {
        const [result] = await pool.query(
            'INSERT INTO sector (nombre, descripcion, activo) VALUES (?, ?, ?)', 
            [nombre, descripcion, activo ?? 1] // Si no se pasa 'activo', se establece en 1
        );

        res.status(201).json({ message: 'Sector creado exitosamente', id: result.insertId });
    } catch (err) {
        console.error('Error al crear sector:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Eliminar un sector
export const deleteSector = async (req, res) => {
    const { id } = req.params; 

    try {
        const [result] = await pool.query('DELETE FROM sector WHERE id_sector = ?', [id]); 

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Sector no encontrado' });
        }

        res.json({ message: 'Sector eliminado exitosamente' });
    } catch (err) {
        console.error('Error al eliminar sector:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
