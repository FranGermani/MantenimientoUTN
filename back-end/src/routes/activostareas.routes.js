import express from 'express';
import { getactivotareas } from '../controllers/activostareas.controller.js';

const router = express.Router();

router.get('/activo-tareas', getactivotareas);

export default router;
