import { Router } from 'express';
import { getEdificios, createEdificio, deleteEdificio } from '../controllers/edificios.controller.js';


const router = Router();
router.get('/edificio', getEdificios);
router.post('/edificio', createEdificio);
router.delete('/edificio/:id', deleteEdificio);

export default router;
