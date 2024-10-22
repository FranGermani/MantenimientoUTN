import { pool } from '../../config/db.js';

export const getEdificios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM edificio');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener edificios', error: err.message });
    }
};

export const getEdificio = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM edificio WHERE id_edificio = ?', [req.params.id]);

        if (rows.length <= 0) {
            return res.status(404).json({
                message: 'Edificio no encontrado',
            });
        }

        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener edificio', error: err.message });
    }
};

export const createEdificio = async (req, res) => {
    const { nombre, direccion, capacidad } = req.body;

    try {
        const [result] = await pool.query(
            'INSERT INTO edificio (nombre, direccion, capacidad) VALUES (?, ?, ?)',
            [nombre, direccion, capacidad]
        );

        res.status(201).json({ id: result.insertId, nombre, direccion, capacidad });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al crear edificio', error: err.message });
    }
};

export const updateEdificio = async (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, capacidad } = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE edificio SET nombre = ?, direccion = ?, capacidad = ? WHERE id_edificio = ?',
            [nombre, direccion, capacidad, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Edificio no encontrado' });
        }

        res.json({ message: 'Edificio actualizado', id, nombre, direccion, capacidad });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al actualizar edificio', error: err.message });
    }
};

export const deleteEdificio = async (req, res) => {
    const { id } = req.params;

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
