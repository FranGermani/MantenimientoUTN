import jwt from 'jsonwebtoken';
import { pool } from '../../config/db.js';
import bcrypt from 'bcrypt';

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

        const hashedPassword = await bcrypt.hash(password, 10);
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
        const [rows] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ error: 'Error en la configuración del servidor' });
        }

        const token = jwt.sign({ id: user.id_usuario, email: user.email, nombre: user.nombre }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        res.cookie('auth-token', token, { httpOnly: true, sameSite: 'lax' });
        res.json({ message: 'Inicio de sesión exitoso', token, nombre: user.nombre });
    } catch (error) {
        console.error('Error en el login:', error); 
        res.status(500).json({ error: 'Error al iniciar sesión', details: error.message });
    }
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

export const protect = (req, res, next) => {
    const token = req.cookies['auth-token'] || req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'No se proporcionó un token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }
        req.user = decoded;
        next();
    });
};

export const logout = (req, res) => {
    console.log('Logout request received'); 
    res.clearCookie('auth-token', { httpOnly: true, sameSite: 'lax' });
    return res.json({ message: 'Sesión cerrada exitosamente' });
};