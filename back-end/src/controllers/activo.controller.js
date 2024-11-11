import { pool } from '../../config/db.js';

export const getActivos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM activo');
        res.json(rows);
    } catch (err) {
        console.error('Error al obtener los activos:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const getActivo = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query('SELECT * FROM activo WHERE id_activo = ?', [id]);
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Activo no encontrado' });
      }
      res.json(rows[0]);
    } catch (err) {
      console.error('Error al obtener el activo:', err);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };

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
