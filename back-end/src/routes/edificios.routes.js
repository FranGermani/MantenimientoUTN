import { Router } from 'express';
import { getEdificios, createEdificio, deleteEdificio, updateEdificio } from '../controllers/edificios.controller.js';


const router = Router();
router.get('/edificio', getEdificios);
router.post('/edificio', createEdificio);
router.delete('/edificio/:id', deleteEdificio);
router.put('/edificio/:id_edificio', updateEdificio);

export default router;
