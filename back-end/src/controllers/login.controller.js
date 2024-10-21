import jwt from 'jsonwebtoken';
import { pool } from '../../config/db.js';
import bcrypt from 'bcrypt';  // Asegúrate de importar bcrypt

export const registro = async (req, res) => {
    const { nombre, email, password } = req.body; 
    if (!nombre || !email || !password) {
        return res.status(400).json({ message: 'Nombre, email y contraseña son requeridos' });
    }
    
    try {
        // Verificar si el usuario ya existe
        const [rows] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Hashear la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(password, 10);

        // Inserción en la base de datos
        await pool.query('INSERT INTO usuario (nombre, email, password) VALUES (?, ?, ?)', [nombre, email, hashedPassword]);
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error al registrar el usuario:', error); 
        res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Obtener el usuario por email
        const [rows] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const user = rows[0];

        // Comparar la contraseña ingresada con la contraseña hasheada
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET no está definido en las variables de entorno');
            return res.status(500).json({ error: 'Error en la configuración del servidor' });
        }

        const token = jwt.sign({ id: user.id_usuario, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        // Enviar el token como cookie o en la respuesta
        res.cookie('auth-token', token, { httpOnly: true, sameSite: 'lax' });
        res.json({ message: 'Inicio de sesión exitoso', token });

    } catch (error) {
        console.error('Error en el login:', error); 
        res.status(500).json({ error: 'Error al iniciar sesión', details: error.message });
    }
};

// Agrega esta línea en login.controller.js

export const protect = (req, res, next) => {
    const token = req.cookies['auth-token'] || req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'No se proporcionó un token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }
        req.user = decoded; // Guardar el usuario decodificado en la solicitud
        next(); // Llama al siguiente middleware o ruta
    });
};

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Se requiere un token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
};