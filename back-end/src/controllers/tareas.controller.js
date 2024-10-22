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