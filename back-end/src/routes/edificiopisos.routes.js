import express from 'express';
import { obtenerPisosPorEdificio } from '../controllers/edificiospisos.controller.js';

const router = express.Router();

// Ruta para obtener los pisos del edificio UTN (id_edificio = 1)
router.get('/edificios/:id_edificio/pisos', obtenerPisosPorEdificio);

export default router; // Esto está bien
