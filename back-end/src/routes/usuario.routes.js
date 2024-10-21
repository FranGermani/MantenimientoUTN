import express from 'express';
import { getUsers, updateUser, deleteUser } from '../controllers/usuario.controller.js';
import { registro } from '../controllers/login.controller.js';

const router = express.Router();

// Obtener todos los usuarios
router.get('/usuarios', getUsers);

// Crear un nuevo usuario (usa registro en lugar de createUser)
router.post('/usuarios', registro);

// Actualizar un usuario existente
router.put('/usuarios/:id', updateUser);

// Eliminar un usuario
router.delete('/usuarios/:id', deleteUser);

export default router;
