import express from 'express';
import { getUbicaciones, createUbicacion, deleteUbicacion } from '../controllers/ubicacion.controller.js'; 

const router = express.Router();

router.get('/ubicaciones', getUbicaciones);

router.post('/ubicaciones', createUbicacion);

router.delete('/ubicaciones/:id', deleteUbicacion);

export default router;
