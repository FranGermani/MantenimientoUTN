import { Router } from 'express';
import { getOrdenTrabajo, getDetallesOrdenTrabajo, nuevaODT, deleteOrdenTrabajo } from '../controllers/ordenTrabajo.controller.js';

const router = Router();

router.get('/orden_trabajo', getOrdenTrabajo);
router.get('/detalle_orden_trabajo/:id', getDetallesOrdenTrabajo);
router.post('/nuevaODT', nuevaODT);
router.delete('/orden_trabajo/:id', deleteOrdenTrabajo);


export default router;