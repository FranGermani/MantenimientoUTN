// routes/activostareas.routes.js
import express from 'express';
import { getactivotareas } from '../controllers/activostareas.controller.js';

const router = express.Router();

// Ruta para obtener todas las tareas de activo
router.get('/activo-tareas', getactivotareas);

// Aquí puedes agregar más rutas para crear, actualizar y eliminar tareas de activo

export default router;
