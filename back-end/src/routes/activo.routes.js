import express from 'express';
import { getActivo, getActivos, createActivo, updateActivo, deleteActivo } from '../controllers/activo.controller.js'
const router = express.Router();

router.get('/activos', getActivos);

router.post('/activos', createActivo);

router.put('/activos/:id', updateActivo);

router.delete('/activos/:id', deleteActivo);

router.get('/activos/:id', getActivo);

export default router;
