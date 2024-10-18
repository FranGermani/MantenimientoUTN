// routes/pisoRoutes.js
import express from 'express';
import { getPisos } from '../controllers/pisos.controller.js'; // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Ruta para obtener todos los pisos
router.get('/pisos', getPisos);

// Aquí puedes agregar más rutas para crear, actualizar y eliminar pisos

export default router;
