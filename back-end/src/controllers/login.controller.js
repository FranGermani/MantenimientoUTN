import jwt from 'jsonwebtoken';
import { pool } from '../../config/db.js';

export const registro = async (req, res) => {
    const { nombre, email, password } = req.body; 
    if (!nombre || !email || !password) {
        return res.status(400).json({ message: 'Nombre, email y contraseña son requeridos' });
    }
    try {
        const [rows] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }
        await pool.query('INSERT INTO usuario (nombre, email, contraseña) VALUES (?, ?, ?)', [nombre, email, password]);
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    console.log('Email recibido:', email);
    console.log('Contraseña recibida:', password); 

    try {
     
        const [rows] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
        console.log('Usuario encontrado:', rows); 

      
        if (rows.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const user = rows[0];

      
        if (user.password !== password) { 
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        
        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET no está definido en las variables de entorno');
            return res.status(500).json({ error: 'Error en la configuración del servidor' });
        }

    
        const token = jwt.sign({ id: user.id_usuario, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        
        res.cookie('auth-token', token, { httpOnly: true, sameSite: 'lax' });
        res.json({ message: 'Inicio de sesión exitoso', token });

    } catch (error) {
        console.error('Error en el login:', error); 
        res.status(500).json({ error: 'Error al iniciar sesión', details: error.message });
    }
};

export const protect = (req, res) => {
    res.json({ message: 'Esta es una ruta protegida' });
};

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(403).json({ error: 'No se proporcionó un token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('Error al verificar el token:', err); 
            return res.status(401).json({ error: 'Falló la autenticación del token' });
        }
        req.userId = decoded.id; 
        next();
    });
};
