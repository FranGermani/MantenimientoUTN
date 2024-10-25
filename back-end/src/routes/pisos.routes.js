import express from 'express';
import { getPisos, createPiso, deletePiso } from '../controllers/pisos.controller.js'; // Asegúrate de que la ruta sea correcta

const router = express.Router();

router.get('/pisos', getPisos);
router.post('/pisos', createPiso);
router.delete('/pisos/:id', deletePiso); 

export default router;
