// routes/activo.routes.js
import express from 'express';
import { getActivos, createActivo, updateActivo, deleteActivo } from '../controllers/activo.controller.js'
const router = express.Router();

// Ruta para obtener todos los activos
router.get('/activos', getActivos);

// Ruta para crear un nuevo activo
router.post('/activos', createActivo);

// Ruta para actualizar un activo existente
router.put('/activos/:id', updateActivo);

// Ruta para eliminar un activo
router.delete('/activos/:id', deleteActivo);

export default router;
