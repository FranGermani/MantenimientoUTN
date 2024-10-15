// routes/ubicacionRoutes.js
import express from 'express';
import { getUbicaciones } from '../controllers/ubicacion.controller.js'; // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Ruta para obtener todas las ubicaciones
router.get('/ubicaciones', getUbicaciones);

// Aquí puedes agregar más rutas para crear, actualizar y eliminar ubicaciones

export default router;
