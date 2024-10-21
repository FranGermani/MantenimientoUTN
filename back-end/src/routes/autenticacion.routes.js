const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const base_conexion = require('../config/db');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

router.post('/register', async (req, res) => {
    const { nombre, email, password } = req.body;  // Asegúrate de que el campo se llama password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Asegúrate de usar 'password' en lugar de 'contraseña'
    const query = 'INSERT INTO usuario (nombre, email, password) VALUES (?, ?, ?)';
    base_conexion.query(query, [nombre, email, hashedPassword], (error, result) => {
        if (error) {
            console.error('Error al registrar usuario: ' + error);
            res.json({ error: 'Error al registrar usuario' });
            return;
        }

        res.json({ nombre, email });  // Respuesta ajustada
    });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;  // Cambiado de nombre a email

    // Actualizado para buscar por email
    const query = 'SELECT * FROM usuario WHERE email = ?';
    base_conexion.query(query, [email], async (error, results) => {
        if (error) {
            console.error('Error al buscar usuario: ' + error);
            res.status(500).json({ error: 'Error al buscar usuario' });
            return;
        }

        if (results.length === 0) {
            res.status(401).json({ error: 'Usuario no encontrado' });
            return;
        }

        const user = results[0];

        try {
            const isMatch = await bcrypt.compare(password, user.password);  // Asegúrate de usar password
            if (!isMatch) {
                res.status(401).json({ error: 'Contraseña incorrecta' });
                return;
            }

            const token = jwt.sign({ nombre: user.nombre }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        } catch (err) {
            console.error('Error al comparar contraseñas: ' + err);
            res.status(500).json({ error: 'Error al comparar contraseñas' });
        }
    });
});

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Acceso a ruta protegida concedido', user: req.user });
});

module.exports = router;
