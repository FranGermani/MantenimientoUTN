import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/usuario.controller.js';

const router = express.Router();

// Obtener todos los usuarios
router.get('/usuarios', getUsers);

// Crear un nuevo usuario
router.post('/usuarios', createUser);

// Actualizar un usuario existente
router.put('/usuarios/:id', updateUser);

// Eliminar un usuario
router.delete('/usuarios/:id', deleteUser);

export default router;
