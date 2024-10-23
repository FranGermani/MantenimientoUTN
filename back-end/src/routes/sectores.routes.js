// routes/sectores.routes.js
import express from 'express';
import { getSectores, createSector, deleteSector } from '../controllers/sector.controller.js'; // Importar el controlador

const router = express.Router();

// Ruta para obtener todos los sectores
router.get('/sector', getSectores);
router.post('/sector', createSector);
router.delete('/sector', deleteSector);
export default router;
