import {pool} from '../../config/db.js';

export const getTareas = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tareas');
        res.json(rows);
    } catch (err){
        console.error('Error al obtener las tareas', err);
        res.status(500).json({message: 'errpr interno del servidor'});
    }
};

export const createTarea = async (req, res) => {
    const { descripcion } = req.body;

    console.log('Datos recibidos:', req.body); 

    if (!descripcion) {
        return res.status(400).json({ message: 'Descripción es requerida' });
    }

    try {
        const [result] = await pool.query('INSERT INTO tareas (descripcion) VALUES (?)', [descripcion]);
        res.status(201).json({ message: 'Tarea creada exitosamente', id: result.insertId });
    } catch (err) {
        console.error('Error al crear la tarea:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const deleteTarea = async (req, res) => {
    const { id_tarea } = req.params;

    try {
        const [result] = await pool.query('DELETE FROM tareas WHERE id_tarea = ?', [id_tarea]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        res.status(200).json({ message: 'Tarea eliminada exitosamente' });
    } catch (err) {
        console.error('Error al eliminar la tarea:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

