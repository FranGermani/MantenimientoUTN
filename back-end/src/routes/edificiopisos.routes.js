import express from 'express';
import { obtenerPisosPorEdificio } from '../controllers/edificiospisos.controller.js';

const router = express.Router();

router.get('/edificios/:id_edificio/pisos', obtenerPisosPorEdificio);

export default router;
