import { Router } from 'express';
import { getPisos } from '../controllers/pisos.controller.js'; // Importa el controlador

const router = Router();

// Define la ruta y vincúlala al controlador
router.get('/piso', getPisos);

export default router;
