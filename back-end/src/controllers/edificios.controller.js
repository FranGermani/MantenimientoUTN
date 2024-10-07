<<<<<<< HEAD
import { pool } from '../db.js';

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

// Obtener un edificio por ID
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

// Crear un nuevo edificio
export const createEdificio = async (req, res) => {
    const { nombre, direccion, capacidad } = req.body; // Suponiendo que tienes estos campos

    try {
        const [result] = await pool.query(
            'INSERT INTO edificio (nombre, direccion, capacidad) VALUES (?, ?, ?)',
            [nombre, direccion, capacidad]
        );

        // Retornar el edificio creado
        res.status(201).json({ id: result.insertId, nombre, direccion, capacidad });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al crear edificio', error: err.message });
    }
};

// Actualizar un edificio
export const updateEdificio = async (req, res) => {
    const { id } = req.params; // ID del edificio a actualizar
    const { nombre, direccion, capacidad } = req.body; // Nuevos datos para el edificio

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
=======
import { pool } from '../db.js'

export const getEdificios = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM edificio')
    res.json(rows)
}

export const getEdificio = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM edificio WHERE id_edificio = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Edificio no encontrado'
    })

    res.json(rows[0])
}

export const createEdificio = (req, res) => res.send('creando empoloyis')

export const updateEdificio = (req, res) => res.send('actualizando empoloyis')

export const deleteEdificio = (req, res) => res.send('eliminando empoloyis')
>>>>>>> 5ccb2529453dfa152c29defb53748b25cdb6dd13
