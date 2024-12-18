import { pool } from '../../config/db.js';

export const getPisos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM piso_nivel');
        res.json(rows);
    } catch (err) {
        console.error('Error al obtener pisos:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const createPiso = async (req, res) => {
    const { nombre, labeltag, activo } = req.body; 

    if (!nombre) {
        return res.status(400).json({ message: 'El nombre del piso es obligatorio' });
    }

    try {
        const [result] = await pool.query(
            'INSERT INTO piso_nivel (nombre, labeltag, activo) VALUES (?, ?, ?)', 
            [nombre, labeltag, activo ?? 1] 
        );

        res.status(201).json({ message: 'Piso creado exitosamente', id: result.insertId });
    } catch (err) {
        console.error('Error al crear piso:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const deletePiso = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await pool.query('DELETE FROM piso_nivel WHERE id_piso = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Piso no encontrado' });
        }

        res.json({ message: 'Piso eliminado exitosamente' });
    } catch (err) {
        console.error('Error al eliminar piso:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

