// routes/sectores.routes.js
import express from 'express';
import { getSectores } from '../controllers/sector.controller.js'; // Importar el controlador

const router = express.Router();

// Ruta para obtener todos los sectores
router.get('/sector', getSectores); // Cambia la ruta si lo deseas

export default router;
