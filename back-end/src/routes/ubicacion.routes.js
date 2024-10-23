// routes/ubicacionRoutes.js
import express from 'express';
import { getUbicaciones, createUbicacion, deleteUbicacion } from '../controllers/ubicacion.controller.js'; 

const router = express.Router();

// Ruta para obtener todas las ubicaciones
router.get('/ubicaciones', getUbicaciones);

router.post('/ubicaciones', createUbicacion);

router.delete('/ubicaciones/:id', deleteUbicacion);



export default router;
