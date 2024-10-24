import { pool } from '../../config/db.js';

// Obtener todos los edificios
export const getEdificios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM edificio');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener edificios', error: err.message });
    }
};
// Crear un nuevo edificio
export const createEdificio = async (req, res) => {
    const { nombre, direccion, labeltag, activo } = req.body; // Suponiendo que tienes estos campos

    try {
        const [result] = await pool.query(
            'INSERT INTO edificio (nombre, direccion, labeltag, activo) VALUES (?, ?, ?, ?)',
            [nombre, direccion, labeltag, activo]
        );

        // Retornar el edificio creado
        res.status(201).json({ id: result.insertId, nombre, direccion, labeltag, activo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al crear edificio', error: err.message });
    }
};

// Eliminar un edificio
export const deleteEdificio = async (req, res) => {
    const { id } = req.params; // ID del edificio a eliminar

    try {
        const [result] = await pool.query('DELETE FROM edificio WHERE id_edificio = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Edificio no encontrado' });
        }

        res.json({ message: 'Edificio eliminado' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al eliminar edificio', error: err.message });
    }
};



