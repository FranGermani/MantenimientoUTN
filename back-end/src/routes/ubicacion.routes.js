import express from 'express';
import { getUbicaciones } from '../controllers/ubicacion.controller.js';

const router = express.Router();

router.get('/ubicaciones', getUbicaciones);

export default router;
