import { pool } from '../../config/db.js'; // Asegúrate de que la conexión esté bien importada

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuario');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};

// Crear un nuevo usuario
export const createUser = async (req, res) => {
    const { nombre, email, password } = req.body; // Asegúrate de recibir todos los campos necesarios
    try {
        const [result] = await pool.query('INSERT INTO usuario (nombre, email, password) VALUES (?, ?, ?)', [nombre, email, password]);
        res.status(201).json({ id: result.insertId, nombre });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};

// Actualizar un usuario existente
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body; 
    try {
        const [result] = await pool.query('UPDATE usuario SET nombre = ? WHERE id_usuario = ?', [nombre, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ id, nombre });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};

// Eliminar un usuario
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM usuario WHERE id_usuario = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(204).send(); // No content
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};
