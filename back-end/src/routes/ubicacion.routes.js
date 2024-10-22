import express from 'express';
import { getUbicaciones } from '../controllers/ubicacion.controller.js'; // Importa el controlador

const router = express.Router();

router.get('/ubicacion', getUbicaciones);

export default router;
